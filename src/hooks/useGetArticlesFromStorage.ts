import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CASHED_ARTICLES } from '../store/user/types'
import { casheArticle } from '../store/user/actions'

const useGetArticlesFromStorage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const savedArticles = window.localStorage.getItem(CASHED_ARTICLES)
    if (savedArticles) {
      dispatch(casheArticle(JSON.parse(savedArticles)))
    }
  }, [])
}

export default useGetArticlesFromStorage
