import React from 'react'
import useStyles from './styles'
import Avatar from '@material-ui/core/Avatar'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../config/routes'

type Props = {
  title: string
}
export default function UserAvatar(props: Props) {
  const { title } = props
  const history = useHistory()
  const classes = useStyles()
  return (
    <Avatar aria-label='recipe' className={classes.root} onClick={() => history.push(`${ROUTES.USER}/${props.title}`)}>
      {title && title.slice(0, 1)}
    </Avatar>
  )
}
