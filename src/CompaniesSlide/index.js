import React from 'react'

import { Appear } from 'spectacle'

import companiesList from './data'
import './style.css'

const Companies = () => (
  <div className="square-container">
    {companiesList.map((src, index) => (
      <div className="square" key={index}>
        <div className="content">
          <Appear order={index}>
            <img src={require(`./images/${src}`)} alt={index} />
          </Appear>
        </div>
      </div>
    ))}
  </div>
)

export default Companies
