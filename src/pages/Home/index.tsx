import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { saveArticlesThunk } from '../../store/articles/thunks'
import { getArticlesSelector } from '../../store/articles/selectors'
import { Typography, Grid } from '@material-ui/core'
import Article from '../../components/Article'

function HomePage() {
  const dispatch = useDispatch()
  const articles = useSelector(getArticlesSelector)
  useEffect(() => {
    dispatch(saveArticlesThunk(10))
  }, [])
  return (
    <>
      <Typography variant='h1' component='h1'>
        Home
      </Typography>
      <Grid alignItems='stretch' container spacing={3}>
        {articles &&
          articles.map((it) => (
            <Grid key={it.id} item xs={6}>
              <Article article={it} />
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default HomePage
