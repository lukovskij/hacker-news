import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseLayout from '../BaseLayout'
import Routes from '../Routes'
import useGetArticlesFromStorage from '../../hooks/useGetArticlesFromStorage'

export default function Root() {
  useGetArticlesFromStorage()
  return (
    <Router>
      <BaseLayout>
        <Routes />
      </BaseLayout>
    </Router>
  )
}
