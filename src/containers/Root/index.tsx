import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseLayout from '../BaseLayout'
import Routes from '../Routes'

export default function Root() {
  return (
    <Router>
      <BaseLayout>
        <Routes />
      </BaseLayout>
    </Router>
  )
}
