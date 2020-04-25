import React from 'react'

import Typography from '@material-ui/core/Typography'
import useLoadArticlesByMount from '../../hooks/useLoadArticlesByMount'
import ArticlesGrid from '../../components/ArticlesGrid'

function HomePage() {
  const articles = useLoadArticlesByMount('newstories')
  return (
    <>
      <Typography variant='h1' component='h1'>
        Home
      </Typography>
      <ArticlesGrid articles={articles} />
    </>
  )
}

export default HomePage
