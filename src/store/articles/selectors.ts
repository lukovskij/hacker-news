import { createSelector } from 'reselect'

const getArticles = (state: ApplicationState) => state.articlesState.articles
const getArticlesCount = (state: ApplicationState) => state.articlesState.count

export const getArticlesCountSelector = createSelector(getArticlesCount, (count) => count)
export const getArticlesSelector = createSelector(getArticles, (articles) => articles)
