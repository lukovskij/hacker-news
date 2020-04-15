import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { NavLink } from 'react-router-dom'
import links from './links'
import useStyles from './styles'

export default function Menu() {
  const urls = links()
  const classes = useStyles()
  return (
    <List>
      {urls.map((it) => (
        <ListItem button key={it.id} className={classes.button}>
          <NavLink exact activeClassName={classes.active} className={classes.link} to={it.url}>
            {it.title}
          </NavLink>
        </ListItem>
      ))}
    </List>
  )
}
