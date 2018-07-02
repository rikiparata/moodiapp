import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import MoodContent from './MoodContent'

const App = () => {
  return (
    <Router>
      <div>
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">moodi</h1>
              <h2 className="subtitle">for students</h2>
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
