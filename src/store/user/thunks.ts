import { ThunkAction } from 'redux-thunk'
import { Actions, User, CASHED_ARTICLES } from './types'
import { getUserSelector, getSavedArticlesSelector } from './selectors'
import { fetchArticle, fetchUser } from '../../config/api'
import { Article } from '../articles/types'
import { saveUserArticles, saveUser, casheArticle } from './actions'

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

const saveArticle = (articles: Array<Article>): ThunkAction<void, any, unknown, Actions> => (dispatch) => {
  window.localStorage.setItem(CASHED_ARTICLES, JSON.stringify(articles))
  dispatch(casheArticle(articles))
}

export const casheArticlesThunk = (art: Article): ThunkAction<void, ApplicationState, unknown, Actions> => (
  dispatch,
  getState
) => {
  try {
    const cashedArticles = getSavedArticlesSelector(getState())
    const article = { ...art, isSaved: true }

    if (cashedArticles && cashedArticles.find((it) => it.id === article.id)) {
      const articles = cashedArticles.filter((it) => it.id !== article.id)
      dispatch(saveArticle(articles))
    } else if (cashedArticles) {
      const concatAticles = [...cashedArticles, article]
      dispatch(saveArticle(concatAticles))
    } else if (!cashedArticles) {
      dispatch(saveArticle([article]))
    }
  } catch (err) {
    console.log(err)
  }
}
