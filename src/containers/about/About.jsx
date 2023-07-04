import React from 'react'
import './about.css'
import { Feature } from '../../components'

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="aboutb">
        <div className="about-feature">
          <Feature title='What is this about' text="It wouldnt be proper to use the casual to fill my texts so i decided why not casually do some chill explaining. Ive been off my grind for a while work wise, i had some plans but life had other plans and it threw me off. Fortunately im back working if this project ever goes up." />
        </div>
        <div className="about-heading">
          <h1 className='gradient__text'> Hows it going so far? Having a good time?</h1>
          <p>What are you up to?</p>
        </div>
        <div className="about-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div>
      </div>
     
    </div>
  )
}

export default About
