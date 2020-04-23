import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}))
