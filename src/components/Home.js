import React from 'react'
import Icon from '@mdi/react'
import { mdiChevronDoubleDown } from '@mdi/js'

const Home = () => {
  return (
    <div id="home">
      <p className='title is-2 has-text-dark'>I'm Chine Anikwe</p>
      {/* <p className='title is-4 has-text-light'>and I'm a Full Stack Web Developer</p> */}
      <div>
        <Icon path={mdiChevronDoubleDown}
          title="Chevron Down to About Section"
          size='3em'
          horizontal
          color="teal"
        />
      </div>
    </div>
  )
}

export default Home