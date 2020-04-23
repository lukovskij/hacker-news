import { combineReducers } from 'redux'
import articlesState, { initialState as initialArticleState } from './articles/reducer'
import { ArticleState } from './articles/types'
import { UserState } from './user/types'
import userState, { initialState as initialUserState } from './user/reducer'

declare global {
  interface ApplicationState {
    articlesState: ArticleState
    userState: UserState
  }
}

export const initialState: ApplicationState = {
  articlesState: {
    ...initialArticleState
  },
  userState: {
    ...initialUserState
  }
}

const rootReducer = combineReducers({
  articlesState,
  userState
})

export default rootReducer
