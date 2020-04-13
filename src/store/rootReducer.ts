import { combineReducers } from 'redux'
import articles from './articles/reducer'

export interface ApplicationState {
  articles: any
}

export const initialState = {
  articles: null
}

const rootReducer = combineReducers({
  articles
})

export default rootReducer
