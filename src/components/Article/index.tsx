import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

import FavoriteIcon from '@material-ui/icons/Favorite'
import { OpenInBrowser } from '@material-ui/icons'
import Avatar from '../Avatar'

import useStyles from './styles'
import { Article } from '../../store/articles/types'
import ROUTES from '../../config/routes'
import { useDispatch } from 'react-redux'
import { casheArticlesThunk } from '../../store/user/thunks'
import ShareButton from '../ShareButton'

type Props = {
  article: Article
}
export default function RecipeReviewCard(props: Props) {
  const { article } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const date = new Date(article.time * 1000)
  const urlPreview = (article.url && new URL(article.url)) || null
  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar title={article.by} />} title={article.title} subheader={date.toUTCString()} />
      <CardContent className={classes.content}>
        <div>
          <Typography component='span' color='textSecondary'>
            type:
          </Typography>{' '}
          {article.type} |{' '}
          <Typography component='span' color='textSecondary'>
            score:
          </Typography>{' '}
          {article.score} |{' '}
          <Typography component='span' color='textSecondary'>
            by:{' '}
          </Typography>
          <RouterLink to={`${ROUTES.USER}/${article.by}`}>{article.by}</RouterLink>
        </div>
        <Typography variant='body1' color='textPrimary' component='p' style={{ wordBreak: 'break-word' }}>
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
        <IconButton
          color={article?.isSaved ? 'primary' : 'secondary'}
          onClick={() => {
            dispatch(casheArticlesThunk(article))
          }}
          aria-label='add to favorites'
        >
          <FavoriteIcon />
        </IconButton>
        <ShareButton url={article.url} />
        {urlPreview && (
          <IconButton
            className={classes.openBrowserButton}
            aria-label='open article'
            onClick={() => window.open(article.url, '_blank')}
          >
            <OpenInBrowser />
          </IconButton>
        )}
      </CardActions>
    </Card>
  )
}
