import React from 'react'
import {Link} from 'react-router-dom'
import {list_of_moods as moods} from '../../data/moods.json'

const Home = (props) => {

  return (
    <div id="cool" className="tile is-vertical-center">
      {moods.map(moodData => {
        return <div className="tile is-child box" key={moodData.mood}><Link className="moods" to={`/${moodData.mood}/content`}>{moodData.mood}</Link></div>
      })} 
    </div>
  )
}

export default Home

