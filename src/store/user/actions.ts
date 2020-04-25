import { User, ActionTypes, SaveUserAction, SaveUserArticlesAction, ClearUserAction } from './types'
import { Article } from '../articles/types'

export const saveUser = (user: User): SaveUserAction => ({
  type: ActionTypes.SAVE_USER,
  payload: {
    user
  }
})

export const saveUserArticles = (articles: Array<Article>): SaveUserArticlesAction => ({
  type: ActionTypes.SAVE_USER_ARTICLES,
  payload: {
    articles
  }
})

export const clearUserState = (): ClearUserAction => ({
  type: ActionTypes.CLEAR_USER
})
