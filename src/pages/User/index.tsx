import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector, getUserArticlesSelector } from '../../store/user/selectors'
import { saveUserThunk, saveUserArticlesThunk } from '../../store/user/thunks'
import Typography from '@material-ui/core/Typography'
import { CardHeader, Grid } from '@material-ui/core'
import UserAvatar from '../../components/Avatar'
import Loader from '../../components/Loader'
import Article from '../../components/Article'
import { clearUserState } from '../../store/user/actions'

function UserPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(getUserSelector)
  const userArticles = useSelector(getUserArticlesSelector)
  const date = user && new Date(user.created * 1000)

  useEffect(() => {
    if (id !== user?.id) {
      dispatch(clearUserState())
    }
  }, [])

  useEffect(() => {
    if (id) {
      dispatch(saveUserThunk(id))
    }
  }, [id])
  useEffect(() => {
    if (user) {
      dispatch(saveUserArticlesThunk())
    }
  }, [user])
  return (
    <>
      <Typography variant='h1' component='h1'>
        User Page
      </Typography>
      {user ? (
        <>
          <CardHeader avatar={<UserAvatar title={user.id} />} title={user.id} subheader={date && date.toUTCString()} />
          <Typography variant='h6'>User Info</Typography>
          <div>
            <Typography variant='body2' color='textPrimary' component='span'>
              karma:
            </Typography>{' '}
            {user.karma}
          </div>
          {user.delay && (
            <div>
              <Typography variant='body2' color='textPrimary' component='span'>
                delay:
              </Typography>{' '}
              {user.delay}
            </div>
          )}
          {user.about && (
            <div>
              <Typography variant='body2' color='textPrimary' component='p'>
                About
              </Typography>
              <Typography variant='body2'>{user.about}</Typography>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
      <Grid style={{ marginTop: 16 }} alignItems='stretch' container spacing={2}>
        {userArticles ? (
          userArticles.map((it) => (
            <Grid key={it.id} item xs={12}>
              <Article article={it} />
            </Grid>
          ))
        ) : (
          <Loader />
        )}
      </Grid>
    </>
  )
}

export default UserPage
