import React from 'react'
import {Link} from 'react-router-dom'

import {list_of_moods as moods} from '../../data/moods.json'

const MoodContent = (props) => {
  const moodName = props.match.params.mood
  const mood = moods.find(a => a.mood === moodName)

  return (
    <div>
      <h1>{mood.mood}</h1>
      {/* <a href={`https://www.google.co.nz/search?q=${mood.mood}`} target="_blank">WAT???!</a> */}
      <ul>
        <h2>Music</h2>
        {mood.music.map(music => {
          return <li key={music}><a href={music.link} target="_blank"><button>{music.song} </button></a></li>
        })}
      </ul>
      <ul>
        <h2>Movies</h2>
         {mood.content.map(content => {
          return <li key={content}><a href={content.link} target="_blank"><button>{content.movie} </button></a></li>
        })}
      </ul>
      <ul>
        <h2>Articles</h2>
         {mood.article.map(article => {
          return <li key={article}><a href={article.link} target="_blank"><button>{article.article} </button></a></li>
        })}
      </ul>
      <ul>
        <h2>Games</h2>
         {mood.game.map(game => {
          return <li key={game}><a href={game.link} target="_blank"><button>{game.game} </button></a></li>
        })}
      </ul>
      <Link to="/">Back</Link>
    </div>
  )
}

export default MoodContent
