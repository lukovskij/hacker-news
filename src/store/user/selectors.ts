import { createSelector } from 'reselect'

const getUser = (state: ApplicationState) => state.userState.user
const getUserArticles = (state: ApplicationState) => state.userState.userArticles
const getSavedArticles = (state: ApplicationState) => state.userState.savedArticles

export const getUserSelector = createSelector(getUser, (user) => user)
export const getUserArticlesSelector = createSelector(getUserArticles, (articles) => articles?.filter(Boolean))
export const getSavedArticlesSelector = createSelector(getSavedArticles, (articles) => articles?.filter(Boolean))
