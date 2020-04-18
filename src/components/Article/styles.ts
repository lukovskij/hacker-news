import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    content: {
      marginTop: 'auto'
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    actions: {
      // marginTop: 'auto'
    },
    openBrowserButton: {
      marginLeft: 'auto'
    }
  })
)
