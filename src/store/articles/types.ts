export enum ActionTypes {
  SAVE_ARTICLES = 'articles/SAVE_ARTICLES',
  SET_ARTICLES_COUNT = 'articles/SET_ARTICLES_COUNT',
  CLEAR_ARTICLES = 'articles/CLEAR_ARTICLES'
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
  isSaved?: boolean
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

export interface ClearArticlesAction {
  type: ActionTypes.CLEAR_ARTICLES
}

export interface SetArticlesCountAction {
  type: ActionTypes.SET_ARTICLES_COUNT
  payload: {
    count: number
  }
}

export type Actions = SaveArticlesAction | SetArticlesCountAction | ClearArticlesAction

export interface ArticleState {
  readonly articles: Array<Article> | null
  readonly count: number | null
}
