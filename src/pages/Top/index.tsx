import React from 'react'

import Typography from '@material-ui/core/Typography'
import useLoadArticlesByMount from '../../hooks/useLoadArticlesByMount'
import ArticlesGrid from '../../components/ArticlesGrid'

function TopPage() {
  const articles = useLoadArticlesByMount('topstories')
  return (
    <>
      <Typography variant='h1' component='h1'>
        Top stories
      </Typography>
      <ArticlesGrid articles={articles} />
    </>
  )
}

export default TopPage
