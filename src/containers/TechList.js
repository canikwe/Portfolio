import React from 'react'
import techList from '../data/techList'

const TechList = () => {
  return (
    <div id='tech-list-container'>
      <h1>Tech List</h1>
      <div id='tech-list'>
        {techList.map(t => <img className='tech' key={t.name} alt={t.name} src={require(`../images/techList/${t.img}`)} />)}
      </div>
    </div>
  )
}

export default TechList