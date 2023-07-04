import React from 'react'
import './portfolio.css'
import { Feature } from '../../components';

const portfolioData = [
  {
    title: 'Why ? What was the reason?',
    text: 'Lorem sit amet consectetur adipisicing elit. Minus, placeat quos autem doloremque natus tempore pariatur voluptatum? unde odio voluptate quasi!',
  },
  {
    title: 'What is the idea or inspiration?',
    text: 'Lorem ipsum dolor sit amet consectetur placeat quos autem doloremque natus tempore pariatur voluptatum? unde odio voluptate quasi!',
  },
  {
    title: 'Who is the target audience?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing placeat quos autem doloremque natus tempore pariatur voluptatum? unde odio voluptate quasi!',
  },
  {
    title: 'Am I actually jobless?',
    text: 'Lorem consectetur adipisicing elit. Minus, placeat quos autem doloremque natus tempore pariatur voluptatum? unde odio voluptate quasi!',
  },
];

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio" id='portfolio'>
        <div className="portfolio-heading">
          <h1 className="gradient__text">This seems like a portfolio project. What was the idea behind this project? Why? What? Who? :/</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="portfolio-container">
          {portfolioData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
