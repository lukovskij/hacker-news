import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => ({
  button: {
    padding: 0
  },
  link: {
    padding: 16,
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    color: theme.palette.primary.dark
  },
  active: {
    color: theme.palette.primary.main,
    background: 'rgba(0,0,0, 0.08)'
  }
}))
