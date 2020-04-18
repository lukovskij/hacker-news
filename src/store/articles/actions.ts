import { Article, ActionTypes, SaveArticlesAction, SetArticlesCountAction } from './types'

export const saveArticles = (articles: Array<Article>): SaveArticlesAction => ({
  type: ActionTypes.SAVE_ARTICLES,
  payload: {
    articles
  }
})

export const setArticleCount = (count: number): SetArticlesCountAction => ({
  type: ActionTypes.SET_ARTICLES_COUNT,
  payload: {
    count
  }
})
