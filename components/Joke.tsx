'use client'

import { useCallback, useEffect, useState } from 'react'
import { RefreshIcon } from './Icons'

type Props = { background: 'payphones' | 'umbrellas' | 'typewriter' }

export const Joke = ({ background }: Props) => {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
      const data: { joke: string } = await res.json()
      setJoke(data.joke)
    } catch {
      setJoke('')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJoke()
  }, [fetchJoke])

  return (
    <aside className={`joke joke--${background}`} aria-label="Dad joke">
      <div className="joke__card">
        <p className="joke__text" aria-live="polite">
          {joke || ' '}
        </p>
        <button className="joke__refresh" onClick={fetchJoke} disabled={loading} aria-label="Another joke">
          <RefreshIcon className={loading ? 'spin' : undefined} />
        </button>
      </div>
    </aside>
  )
}
