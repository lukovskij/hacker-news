import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import FavoriteIcon from '@material-ui/icons/Favorite'
import { OpenInBrowser } from '@material-ui/icons'
import ShareIcon from '@material-ui/icons/Share'
import Avatar from '../Avatar'

import useStyles from './styles'
import { Article } from '../../store/articles/types'

type Props = {
  article: Article
}
export default function RecipeReviewCard(props: Props) {
  const { article } = props
  const classes = useStyles()
  const date = new Date(article.time * 1000)
  const urlPreview = (article.url && new URL(article.url)) || null
  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar title={article.title} />} title={article.title} subheader={date.toUTCString()} />
      <CardContent className={classes.content}>
        <Typography variant='body1' color='textPrimary' component='p'>
          {article.text || 'text not found 😭'}
        </Typography>
        <Typography variant='body2' color='secondary'>
          from{' '}
          {urlPreview ? (
            <Link target='_blank' href={urlPreview.origin}>
              {urlPreview.origin}
            </Link>
          ) : (
            'no url 🥶'
          )}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        {urlPreview && (
          <IconButton className={classes.openBrowserButton} aria-label='open article'>
            <OpenInBrowser />
          </IconButton>
        )}
      </CardActions>
    </Card>
  )
}
