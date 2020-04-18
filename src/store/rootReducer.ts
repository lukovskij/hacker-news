import { combineReducers } from 'redux'
import articlesState from './articles/reducer'
import { ArticleState } from './articles/types'

declare global {
  interface ApplicationState {
    articlesState: ArticleState
  }
}

export const initialState: ApplicationState = {
  articlesState: {
    articles: null,
    count: null
  }
}

const rootReducer = combineReducers({
  articlesState
})

export default rootReducer
