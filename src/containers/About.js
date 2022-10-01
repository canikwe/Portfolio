import React from 'react'
import TechList from './TechList'
import Bio from '../components/Bio'

const About = () => {
  return (
    <section id="about">
      <section className="hero is-fullheight is-light is-bold">
        <div className="header">
          <p className="title is-3">About</p>
        </div>
        <div className="hero-body">
          <section className="content">
            <Bio />
            <TechList />
          </section>
        </div>
      </section>
    </section>
  )
}

export default About
