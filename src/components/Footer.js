import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
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
        <p>
          <a href="https://www.linkedin.com/in/chine-anikwe/">Chine Anikwe</a> © 2020 . Please report any issues <a href="https://github.com/canikwe/Portfolio/issues">here</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer