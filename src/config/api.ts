import axios from 'axios'

export const API_URL = 'https://hacker-news.firebaseio.com/v0/'

export enum API_ROOT_ROUTES {
  topstories = 'topstories',
  newstories = 'newstories',
  beststories = 'beststories',
  askstories = 'askstories',
  showstories = 'showstories',
  jobstories = 'jobstories'
}

export const fetchRootUrlsData = <ServerData>(route: keyof typeof API_ROOT_ROUTES) => {
  return axios.get<ServerData>(`${API_URL}${route}.json?print=pretty`).then((response) => response)
}

export const fetchArticle = <ServerData>(articleCode: number) =>
  axios.get<ServerData>(`${API_URL}item/${articleCode}.json?print=pretty`).then((response) => response)

export const fetchUser = <ServerData>(userId: string) =>
  axios.get<ServerData>(`${API_URL}user/${userId}.json?print=pretty`).then((response) => response)
