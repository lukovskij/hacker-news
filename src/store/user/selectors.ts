import { createSelector } from 'reselect'

const getUser = (state: ApplicationState) => state.userState.user
const getUserArticles = (state: ApplicationState) => state.userState.userArticles

export const getUserSelector = createSelector(getUser, (user) => user)
export const getUserArticlesSelector = createSelector(getUserArticles, (articles) => articles)
