import { makeStyles, createStyles } from '@material-ui/core/styles'

export default makeStyles(() =>
  createStyles({
    root: {
      position: 'relative'
    },

    links: {
      position: 'absolute',
      top: '50%',
      right: '-50%',
      transform: 'translateY(-50%)'
    }
  })
)
