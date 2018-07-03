import React from 'react'
import {Link} from 'react-router-dom'
import {list_of_moods as moods} from '../../data/moods.json'

const Home = (props) => {

  return (
    <div id="cool" className="tile has-text-centered">
      {moods.map(moodData => {
        return <div className="tile is-child box" key={moodData.mood}><Link to={`/${moodData.mood}/content`}>{moodData.mood}</Link></div>
      })} 
    </div>
  )
}

export default Home

