import React, { ReactNode } from 'react'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Menu from './components/Menu'

type Props = {
  children: ReactNode
}
export default function BaseLayout(props: Props) {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            HK news
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Menu />
        </div>
      </Drawer>
      <main className={classes.content}>{props.children}</main>
    </div>
  )
}
