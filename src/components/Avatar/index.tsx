import React from 'react'
import useStyles from './styles'
import Avatar from '@material-ui/core/Avatar'

type Props = {
  title: string
}
export default function UserAvatar(props: Props) {
  const { title } = props
  const classes = useStyles()
  return (
    <Avatar aria-label='recipe' className={classes.root}>
      {title.slice(0, 1)}
    </Avatar>
  )
}
