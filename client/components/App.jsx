import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import MoodContent from './MoodContent'

const App = () => {
  return (
    <Router>
      <div className="all">
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="maintitle">moodi</div>
              <div className="subtitle">for students</div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Welcome To Moodi</h1>
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
