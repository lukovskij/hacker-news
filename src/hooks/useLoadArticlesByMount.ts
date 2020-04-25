import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearArticles } from '../store/articles/actions'
import { saveArticlesThunk } from '../store/articles/thunks'
import { API_ROOT_ROUTES } from '../config/api'
import { getArticlesSelector } from '../store/articles/selectors'

const useLoadArticlesByMount = (type: keyof typeof API_ROOT_ROUTES) => {
  const dispatch = useDispatch()
  const articles = useSelector(getArticlesSelector)
  useEffect(() => {
    dispatch(clearArticles())
    dispatch(saveArticlesThunk(10, type))
  }, [])

  return articles
}

export default useLoadArticlesByMount
