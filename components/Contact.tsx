'use client'

import { useState, type FormEvent } from 'react'
import { contact } from '@/content/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export const Contact = () => {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container container--narrow">
        <h2 className="section-title section-title--center">Contact Me</h2>
        <form className="contact__form" onSubmit={onSubmit}>
          <div className="contact__row">
            <label>
              Name
              <input name="name" type="text" autoComplete="name" placeholder="Elizabeth Bennet" />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" placeholder="elizabeth@bennet.com" />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" type="text" placeholder="To Whom It May Concern..." />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} />
          </label>
          {status === 'sent' ? (
            <p role="status">Thanks!</p>
          ) : (
            <div>
              <button type="submit" disabled={status === 'sending'}>
                Submit
              </button>
            </div>
          )}
          {status === 'error' && <p role="alert">Ooops! There was an error.</p>}
        </form>
      </div>
    </section>
  )
}
