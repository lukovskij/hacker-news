import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ROUTES from '../../config/routes'
import HomePage from '../../pages/Home'
import AskPage from '../../pages/Ask'
import JobsPage from '../../pages/Jobs'
import BestPage from '../../pages/BestStories'
import ShowPage from '../../pages/Show'
import TopPage from '../../pages/Top'
import UserPage from '../../pages/User'
import SavedArticlesPage from '../../pages/SavedArticles'

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ASK} component={AskPage} />
      <Route exact path={ROUTES.JOBS} component={JobsPage} />
      <Route exact path={ROUTES.BEST} component={BestPage} />
      <Route exact path={ROUTES.SHOW} component={ShowPage} />
      <Route exact path={ROUTES.TOP} component={TopPage} />
      <Route exact path={ROUTES.SAVED_ARTICLES} component={SavedArticlesPage} />
      <Route exact path={`${ROUTES.USER}/:id`} component={UserPage} />
    </Switch>
  )
}

export default Routes
