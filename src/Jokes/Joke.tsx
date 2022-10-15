import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

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
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((joke) => {
        setTimeout(() => {
          updateJoke(joke)
          updateLoading(false)
        }, 1500)
      })
  }

  return (
    <div className="card paper">
      <div className="card-content">
        <h1 className="title">{joke.joke}</h1>
        <FontAwesomeIcon icon={faSync} spin={loading} onClick={getJoke} color="teal" />
      </div>
    </div>
  )
}

export default Joke
