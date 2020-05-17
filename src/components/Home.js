import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div id="home">
      <div>
        <h1 className='glow'>hello!</h1>
        <p className='title is-2 has-text-light'>I'm Chine Anikwe</p>
      </div>
      <div>
        <a href='#about'>
          <FontAwesomeIcon 
            icon={faAngleDoubleDown}
            size="3x"
          />
        </a>
      </div>
    </div>
  )
}

export default Home