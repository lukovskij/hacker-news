import React from 'react'

import Typography from '@material-ui/core/Typography'
import useLoadArticlesByMount from '../../hooks/useLoadArticlesByMount'
import ArticlesGrid from '../../components/ArticlesGrid'

function BestStories() {
  const articles = useLoadArticlesByMount('beststories')
  return (
    <>
      <Typography variant='h1' component='h1'>
        Best stories
      </Typography>
      <ArticlesGrid articles={articles} />
    </>
  )
}

export default BestStories
