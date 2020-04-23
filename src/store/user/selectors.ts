import { createSelector } from 'reselect'

const getUser = (state: ApplicationState) => state.userState.user

export const getUserSelector = createSelector(getUser, (user) => user)
