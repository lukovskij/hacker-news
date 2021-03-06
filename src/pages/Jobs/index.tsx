import React from 'react'

import Typography from '@material-ui/core/Typography'
import useLoadArticlesByMount from '../../hooks/useLoadArticlesByMount'
import ArticlesGrid from '../../components/ArticlesGrid'

function JobsPage() {
  const articles = useLoadArticlesByMount('jobstories')
  return (
    <>
      <Typography variant='h1' component='h1'>
        Jobs
      </Typography>
      <ArticlesGrid articles={articles} />
    </>
  )
}

export default JobsPage
