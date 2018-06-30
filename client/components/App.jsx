import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import MoodContent from './MoodContent'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Moodi</h1>
        <Route exact path='/' component={Home}/>
        <Route path='/:mood/content' component={MoodContent}/>
      </div>
    </Router>
  )
}

export default App
