import React from 'react'

import Typography from '@material-ui/core/Typography'
import useLoadArticlesByMount from '../../hooks/useLoadArticlesByMount'
import ArticlesGrid from '../../components/ArticlesGrid'

function ShowPage() {
  const articles = useLoadArticlesByMount('showstories')
  return (
    <>
      <Typography variant='h1' component='h1'>
        Show stories
      </Typography>
      <ArticlesGrid articles={articles} />
    </>
  )
}

export default ShowPage
