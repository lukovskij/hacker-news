import { createSelector } from 'reselect'
import { getSavedArticlesSelector } from '../user/selectors'

const getArticles = (state: ApplicationState) => state.articlesState.articles
const getArticlesCount = (state: ApplicationState) => state.articlesState.count

export const getArticlesCountSelector = createSelector(getArticlesCount, (count) => count)

export const getArticlesSelector = createSelector(getArticles, getSavedArticlesSelector, (articles, savedArticles) => {
  return articles?.map((it) => {
    if (savedArticles?.find((el) => el.id === it.id)) {
      return {
        ...it,
        isSaved: true
      }
    }

    return it
  })
})
