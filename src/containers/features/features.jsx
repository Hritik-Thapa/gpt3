import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData=[
  {
    title:'Improving end distrusts instantly',
    text:'From the fine john he give of rich he. The age abd draw mrs like. Improcing and distrusts may instantly was househol applauded'
  },
  {
    title:'Become the tended active',
    text:'From the fine john he give of rich he. The age abd draw mrs like. Improcing and distrusts may instantly was househol applauded'
  },
  {
    title:'Message or am nothing',
    text:'From the fine john he give of rich he. The age abd draw mrs like. Improcing and distrusts may instantly was househol applauded'
  },
  {
    title:'Really boy law county',
    text:'From the fine john he give of rich he. The age abd draw mrs like. Improcing and distrusts may instantly was househol applauded'
  }

]
function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make It Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map(element => (
          <Feature title={element.title} text={element.text}/>
        ))}
      </div>
    </div>
  )
}

export default Features;