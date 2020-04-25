import { ThunkAction } from 'redux-thunk'
import { Actions, User } from './types'
import { getUserSelector } from './selectors'
import { fetchArticle, fetchUser } from '../../config/api'
import { Article } from '../articles/types'
import { saveUserArticles, saveUser } from './actions'

export const saveUserThunk = (userId: string): ThunkAction<void, ApplicationState, unknown, Actions> => async (
  dispatch
) => {
  const { data } = await fetchUser<User>(userId)
  dispatch(saveUser(data))
}

export const saveUserArticlesThunk = (): ThunkAction<void, ApplicationState, unknown, Actions> => async (
  dispatch,
  getState
) => {
  const userArticlesIds = getUserSelector(getState())
  const articlesPrommises = []
  const articles: Array<Article> = []
  let idx = 0
  if (userArticlesIds?.submitted && userArticlesIds?.submitted.length) {
    while (idx < userArticlesIds.submitted.length && idx < 10) {
      articlesPrommises.push(fetchArticle<Article>(userArticlesIds.submitted[idx]))
      idx += 1
    }

    const responce = await Promise.all([...articlesPrommises]).then((res) => res)
    responce.forEach((it: { data: Article }) => {
      articles.push(it.data)
    })
    dispatch(saveUserArticles(articles))
  }
}
