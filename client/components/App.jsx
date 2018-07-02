import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import MoodContent from './MoodContent'

const App = () => {
  return (
    <Router>
      <div>
        <section class="hero is-medium is-dark is-bold">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">moodi</h1>
              <h2 class="subtitle">for students</h2>
            </div>
          </div>
        </section>
        <Route exact path='/' component={Home} />
        <Route path='/:mood/content' component={MoodContent} />
      </div>
    </Router>
  )
}

export default App
