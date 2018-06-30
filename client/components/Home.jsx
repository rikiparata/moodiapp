import React from 'react'
import {Link} from 'react-router-dom'
import {list_of_moods as moods} from '../../data/moods.json'

const Home = (props) => {
  console.log(props)
  return (
    <ul>
      {moods.map(moodData => {
        return <li key={moodData.mood}><Link to={`/${moodData.mood}/content`}>{moodData.mood}</Link></li>
      })}
    </ul>
  )
}

export default Home
