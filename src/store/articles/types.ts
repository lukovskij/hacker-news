export enum ActionTypes {
  SAVE_ARTICLES = 'articles/SAVE_ARTICLES',
  SET_ARTICLES_COUNT = 'articles/SET_ARTICLES_COUNT'
}

export type Article = {
  by: string
  descendants: number
  id: number
  kids: Array<number>
  score: number
  time: number
  title: string
  type: string
  url: string
  text?: string
}

export type Articles = {
  articles: Array<Article>
}

export interface SaveArticlesAction {
  type: ActionTypes.SAVE_ARTICLES
  payload: {
    articles: Array<Article>
  }
}
export interface SetArticlesCountAction {
  type: ActionTypes.SET_ARTICLES_COUNT
  payload: {
    count: number
  }
}

export type Actions = SaveArticlesAction | SetArticlesCountAction

export interface ArticleState {
  readonly articles: Array<Article> | null
  readonly count: number | null
}
