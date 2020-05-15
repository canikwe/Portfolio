import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Joke from './Joke'

const Contact = () => {

  const [status, updateStatus] = useState('')
  const [form, updateForm] = useState({ name: '', email: '', subject: '', message: ''})

  const handleFormUpdate = e => updateForm({...form, [e.target.name]: e.target.value })

  const submitForm = e => {
    e.preventDefault()
    const htmlForm = e.target
    const data = new FormData(htmlForm)
    const xhr = new XMLHttpRequest()
    xhr.open(htmlForm.method, htmlForm.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        updateForm({ name: '', email: '', subject: '', message: '' })
        updateStatus({ status: "SUCCESS" })
      } else {
        updateStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  return (
    <>
      <div id='contact-header' className='card'>
        <Joke />
      </div>
      <section id='contact' className="hero is-dark is-bold is-fullheight">
        <div className="hero-body">
          <div className='container'>
            <h1 className='title'>Contact Me</h1>
            <div className='extra'>
              <span className='contact-item'>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/canikwe'>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </span>
              <span className='contact-item'>
                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/chine-anikwe/'>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </span>
            </div>
            <div className='box'>

            <form
              onSubmit={submitForm}
              action={process.env.REACT_APP_CONTACT_URL}
              method="POST"
            >
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Enter name here" name='name' value={form.name} onChange={handleFormUpdate}  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" name='email' placeholder="Email" value={form.email} onChange={handleFormUpdate} />
                </div>
              </div>

              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input className="input" type="text" name='subject' placeholder="Subject" value={form.subject} onChange={handleFormUpdate} />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" name="message" value={form.message} onChange={handleFormUpdate} placeholder='Message' />
                </div>
              </div>
  
              {status === "SUCCESS" ? <p>Thanks!</p> : (
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
