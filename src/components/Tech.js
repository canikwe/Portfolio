import React from 'react'

const Tech = ({tech: { name, level }}) => {
  return (
    <div className='tech'>
      { name }
      <progress className="progress is-primary" value={level} max="100">{`${level}%`}</progress>
    </div>
  )
}

export default Tech
