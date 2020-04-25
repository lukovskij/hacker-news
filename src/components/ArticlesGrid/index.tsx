import React from 'react'
import { Article as ArticleType } from '../../store/articles/types'
import Grid from '@material-ui/core/Grid'
import Loader from '../Loader'
import Article from '../Article'

type Props = {
  articles: Array<ArticleType> | null | undefined
}
export default function ArticlesGrid(props: Props) {
  const { articles } = props
  return (
    <Grid alignItems='stretch' container spacing={2}>
      {articles ? (
        articles.map((it) => (
          <Grid key={it.id} item xs={12}>
            <Article article={it} />
          </Grid>
        ))
      ) : (
        <Loader />
      )}
    </Grid>
  )
}
