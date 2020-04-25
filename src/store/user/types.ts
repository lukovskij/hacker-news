import { Article } from '../articles/types'

export enum ActionTypes {
  SAVE_USER = 'articles/SAVE_USER',
  SAVE_USER_ARTICLES = 'articles/SAVE_USER_ARTICLES',
  CLEAR_USER = 'articles/CLEAR_USER',
  CAHSE_ARTICLES = 'articles/CAHSE_ARTICLES'
}

export const CASHED_ARTICLES = 'CASHED_ARTICLES'

export type User = {
  id: string
  delay: number
  created: number
  karma: number
  about: string
  submitted: Array<number>
}

export interface SaveUserAction {
  type: ActionTypes.SAVE_USER
  payload: {
    user: User
  }
}

export interface CasheArticleAction {
  type: ActionTypes.CAHSE_ARTICLES
  payload: {
    articles: Array<Article>
  }
}

export interface SaveUserArticlesAction {
  type: ActionTypes.SAVE_USER_ARTICLES
  payload: {
    articles: Array<Article>
  }
}

export interface ClearUserAction {
  type: ActionTypes.CLEAR_USER
}

export type Actions = SaveUserAction | SaveUserArticlesAction | ClearUserAction | CasheArticleAction

export interface UserState {
  readonly user: User | null
  readonly userArticles: Array<Article> | null
  readonly savedArticles: Array<Article> | null
}
