import React from 'react'

const Tech = ({tech: { name, level }}) => {
  return (
    <div className='tech'>
      { name }
      <progress class="progress is-primary" value={level} max="100">{`${level}%`}</progress>
    </div>
  )
}

export default Tech

// <img className='tech' key={t.name} alt={t.name} src={require(`../images/techList/${t.img}`)} />