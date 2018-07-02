import React from 'react'
import {Link} from 'react-router-dom'
import {list_of_moods as moods} from '../../data/moods.json'

const Home = (props) => {

  return (
    <div id="cool" className="tile is-ancestor has-text-centered">
    
      {moods.map(moodData => {
        return <div style={{padding: "50px"}} className="tile is-child box " key={moodData.mood}><Link to={`/${moodData.mood}/content`}>{moodData.mood}</Link></div>
      })}
    </div>
  )
}
// <div class="tile is-ancestor">
//   <div class="tile is-parent">
//     <article class="tile is-child box">
//       <p class="title">Hello World</p>
//       <p class="subtitle">What is up?</p>
//     </article>
//   </div>
//   <div class="tile is-parent">
//     <article class="tile is-child box">
//       <p class="title">Foo</p>
//       <p class="subtitle">Bar</p>
//     </article>
//   </div>
//   <div class="tile is-parent">
//     <article class="tile is-child box">
//       <p class="title">Third column</p>
//       <p class="subtitle">With some content</p>
//       <div class="content">
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
//       </div>
//     </article>
//   </div>
// </div>
export default Home
