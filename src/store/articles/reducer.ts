import { ArticleState, Actions, ActionTypes } from './types'

const initialState: ArticleState = {
  articles: null,
  count: null
}

const articlesState = (state: ArticleState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SAVE_ARTICLES: {
      return {
        ...state,
        articles: action.payload.articles
      }
    }
    case ActionTypes.SET_ARTICLES_COUNT: {
      return {
        ...state,
        count: action.payload.count
      }
    }
    default:
      return state
  }
}

export default articlesState
