import { User, ActionTypes, SaveUserAction } from './types'

export const saveArticles = (user: User): SaveUserAction => ({
  type: ActionTypes.SAVE_USER,
  payload: {
    user
  }
})
