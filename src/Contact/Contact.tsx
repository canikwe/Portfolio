import React, { useState } from 'react'
import { Joke } from '../Jokes/Joke'

enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const Contact = () => {
  const [status, updateStatus] = useState<Status>()
  const [form, updateForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleFormUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    updateForm({ ...form, [e.target.name]: e.target.value })

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const htmlForm = e.target as HTMLFormElement
    const data = new FormData(htmlForm)
    const xhr = new XMLHttpRequest()
    xhr.open(htmlForm.method, 'https://formspree.io/mlepdova')
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => handleRequestResponse(xhr)
    xhr.send(data)
  }

  const handleRequestResponse = (xhr: XMLHttpRequest) => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      updateForm({ name: '', email: '', subject: '', message: '' })
      updateStatus(Status.SUCCESS)
    } else {
      updateStatus(Status.ERROR)
    }
  }

  return (
    <>
      <div id="contact-header" className="card">
        <Joke />
      </div>
      <section id="contact" className="hero is-dark is-bold is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Contact Me</h1>

            <div className="box is-radiusless">
              <form onSubmit={submitForm} method="POST">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Elizabeth Bennet"
                      name="name"
                      value={form.name}
                      onChange={handleFormUpdate}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      placeholder="elizabeth@bennet.com"
                      value={form.email}
                      onChange={handleFormUpdate}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="subject"
                      placeholder="To Whom It May Concern..."
                      value={form.subject}
                      onChange={handleFormUpdate}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={form.message}
                      onChange={handleFormUpdate}
                      placeholder=""
                    />
                  </div>
                </div>

                {status === Status.SUCCESS ? (
                  <p>Thanks!</p>
                ) : (
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                )}
                {status === Status.ERROR && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
