import { UserState, Actions, ActionTypes } from './types'

export const initialState: UserState = {
  user: null,
  userArticles: null,
  savedArticles: null
}

const userState = (state: UserState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.CLEAR_USER: {
      return {
        ...initialState
      }
    }
    case ActionTypes.SAVE_USER: {
      return {
        ...state,
        user: action.payload.user
      }
    }
    case ActionTypes.SAVE_USER_ARTICLES: {
      return {
        ...state,
        userArticles: action.payload.articles
      }
    }
    case ActionTypes.CAHSE_ARTICLES: {
      return {
        ...state,
        savedArticles: action.payload.articles
      }
    }
    default:
      return state
  }
}

export default userState
