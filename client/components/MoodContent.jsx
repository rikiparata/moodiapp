import React from 'react'
import { Link } from 'react-router-dom'

import { list_of_moods as moods } from '../../data/moods.json'

const MoodContent = (props) => {
    const moodName = props.match.params.mood
    const mood = moods.find(a => a.mood === moodName)

    return (
        <div>
            <h2>{mood.mood}</h2>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <ul>
                            <h3>Music</h3>
                            {mood.music.map(music => {
                                return <li key={music}><a className="button is-large is-rounded" href={music.link} target="_blank">{music.song}</a></li>
                            })}
                        </ul>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <ul>
                            <h3>Movies</h3>
                            {mood.content.map(content => {
                                return <li key={content}><a className="button is-large is-rounded" href={content.link} target="_blank">{content.movie}</a></li>
                            })}
                        </ul>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <ul>
                            <h3>Articles</h3>
                            {mood.article.map(article => {
                                return <li key={article}><a className="button is-large is-rounded" href={article.link} target="_blank">{article.article}</a></li>
                            })}
                        </ul>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <ul>
                            <h3>Games</h3>
                            {mood.game.map(game => {
                                return <li key={game}><a className="button is-large is-rounded" href={game.link} target="_blank">{game.game}</a></li>
                            })}
                        </ul>
                    </article>
                </div>
            </div>
            <div className="fullWidth">
                <div className="button is-rounded is-medium"><Link to="/">BACK</Link></div>
            </div>
        </div>
    )
}

export default MoodContent
