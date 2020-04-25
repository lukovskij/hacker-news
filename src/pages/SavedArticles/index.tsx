import React from 'react'

import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import ArticlesGrid from '../../components/ArticlesGrid'
import { getSavedArticlesSelector } from '../../store/user/selectors'

function SavedArticlesPage() {
  const articles = useSelector(getSavedArticlesSelector)
  return (
    <>
      <Typography variant='h1' component='h1'>
        Saved Articles
      </Typography>
      {(() => {
        if (articles && articles.length) {
          return <ArticlesGrid articles={articles} />
        }
        return <Typography> Yo have no articles</Typography>
      })()}
    </>
  )
}

export default SavedArticlesPage
