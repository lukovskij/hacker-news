import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Facebook from '@material-ui/icons/Facebook'
import ShareIcon from '@material-ui/icons/Share'
import useStyles from './styles'
import { Paper } from '@material-ui/core'

type Props = {
  url: string
}
export default function ShareButton(props: Props) {
  const [isShow, setIsShow] = useState(false)
  const classes = useStyles(props)
  if (!props.url) {
    return null
  }
  return (
    <div className={classes.root}>
      <IconButton aria-label='share' onClick={() => setIsShow(!isShow)}>
        <ShareIcon />
      </IconButton>
      {isShow && (
        <Paper className={classes.links}>
          <a href={`https://www.facebook.com/sharer.php?u=${props.url}`} target='_blank' rel='noopener noreferrer'>
            <Facebook />
          </a>
        </Paper>
      )}
    </div>
  )
}
