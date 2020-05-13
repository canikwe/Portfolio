import React, { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiSync } from '@mdi/js'

const Joke = () => {
  const [joke, updateJoke] = useState({ joke: '' })
  const [loading, updateLoading] = useState(false)

  useEffect(() => {
    getJoke()
  }, [])

  const getJoke = () => {
    updateLoading(true)
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(joke => {
        setTimeout(() => {
          updateJoke(joke)
          updateLoading(false)
        }, 1500)
      })
  }

  return (
    <div className='card paper'>
      <div class="card-content">
        <h1 className='title'>{joke.joke}</h1>
        <Icon path={mdiSync}
          title="Chevron Down to About Section"
          size='1.5em'
          horizontal
          color="teal"
          spin={loading}
          onClick={getJoke}
        />
      </div>
    </div>
  )
}

export default Joke