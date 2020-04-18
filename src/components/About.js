import React from 'react'
import TechList from '../containers/TechList'
import Bio from './Bio'

const About = () => {
  return (
    <div id='about'>
      <div className='header'>
        <h1>About</h1>
      </div>
      <section className='content'>
        <Bio />
        <TechList />
      </section>
    </div>
  )
}

export default About