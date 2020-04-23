import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import useStyles from './styles'

export default function Loader() {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <CircularProgress />
    </Paper>
  )
}
