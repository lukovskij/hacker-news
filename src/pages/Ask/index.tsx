import React from 'react'

import Typography from '@material-ui/core/Typography'
import useLoadArticlesByMount from '../../hooks/useLoadArticlesByMount'
import ArticlesGrid from '../../components/ArticlesGrid'

function AskPage() {
  const articles = useLoadArticlesByMount('askstories')
  return (
    <>
      <Typography variant='h1' component='h1'>
        Ask
      </Typography>
      <ArticlesGrid articles={articles} />
    </>
  )
}

export default AskPage
