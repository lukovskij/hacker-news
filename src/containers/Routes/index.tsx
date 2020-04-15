import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ROUTES from '../../config/routes'
import HomePage from '../../pages/Home'
import AskPage from '../../pages/Ask'
import JobsPage from '../../pages/Jobs'
import NewsPage from '../../pages/News'
import PastPage from '../../pages/Past'
import ShowPage from '../../pages/Show'
import SubmitPage from '../../pages/Submit'
import ThreadsPage from '../../pages/Threads'
import CommentsPage from '../../pages/Commets'

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ASK} component={AskPage} />
      <Route exact path={ROUTES.COMMENTS} component={CommentsPage} />
      <Route exact path={ROUTES.JOBS} component={JobsPage} />
      <Route exact path={ROUTES.NEWS} component={NewsPage} />
      <Route exact path={ROUTES.PAST} component={PastPage} />
      <Route exact path={ROUTES.SHOW} component={ShowPage} />
      <Route exact path={ROUTES.SUBMIT} component={SubmitPage} />
      <Route exact path={ROUTES.THREADS} component={ThreadsPage} />
    </Switch>
  )
}

export default Routes
