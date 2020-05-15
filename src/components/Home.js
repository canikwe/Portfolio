import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div id="home">
      <p className='title is-2 has-text-dark'>I'm Chine Anikwe</p>
      
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