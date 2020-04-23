import { makeStyles, Theme } from '@material-ui/core'

const drawerWidth = 240
export default makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingTop: 64,
    maxWidth: `calc(100% - ${drawerWidth}px)`
  }
}))
