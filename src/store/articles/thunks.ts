import { saveArticles, setArticleCount } from './actions'
import { ThunkAction } from 'redux-thunk'
import { Actions, Article } from './types'
import { fetchRootUrlsData, fetchArticle, API_ROOT_ROUTES } from '../../config/api'
import { getArticlesCountSelector, getArticlesSelector } from './selectors'

type Thunk = ThunkAction<void, ApplicationState, unknown, Actions>

export const setArticleCountThunk = (count: number): Thunk => (dispatch, getState) => {
  const articleCountState = getArticlesCountSelector(getState())
  const newArticleCount = articleCountState ? articleCountState + count : count
  dispatch(setArticleCount(newArticleCount))
}

export const saveArticlesThunk = (count: number, type: keyof typeof API_ROOT_ROUTES): Thunk => async (
  dispatch,
  getState
) => {
  const stateArticles = getArticlesSelector(getState())
  const { data: ids } = await fetchRootUrlsData<Array<number>>(type)
  let i = 0
  const articlePromisses: Array<any> | null = []
  const articles: Array<Article> = []

  while (i <= count) {
    articlePromisses.push(fetchArticle<Article>(ids[i]))
    i += 1
  }

  dispatch(setArticleCountThunk(count))

  const responce = await Promise.all([...articlePromisses]).then((res) => res)
  responce.forEach((it: { data: Article }) => {
    articles.push(it.data)
  })
  if (stateArticles !== null) {
    dispatch(saveArticles(stateArticles.concat(articles)))
  } else {
    dispatch(saveArticles(articles))
  }
}
