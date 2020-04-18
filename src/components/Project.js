import React, { useState } from 'react'

const Project = ({project}) => {
  const [hover, updateHover] = useState(' is-hidden')
  
  return (
    <div className='column is-one-quarter'>
      <div className="card" onMouseOver={() => updateHover(' is-overlay is-centered')} onMouseOut={() => updateHover(' is-hidden')} >
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className={"content" + hover}>
          <p className="title is-5">John Smith</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  )
}

export default Project