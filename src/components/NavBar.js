import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [navToggle, updateNavToggle] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', myFunction)
  }, [])

  
  const myFunction = e => {
    const nav = document.querySelector('.navbar')
    const ss = nav.offsetTop

    if (window.pageYOffset >= ss) {
      nav.classList.add("is-fixed-top")
      if (window.pageYOffset === 0) nav.classList.remove("is-fixed-top")
    } else {
      nav.classList.remove("is-fixed-top")
    }
  }

  return (
    
    <nav className='navbar' role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className={navToggle ? 'navbar-burger burger is-active' : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => updateNavToggle(!navToggle)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={navToggle ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
            <a className="navbar-item" href='#home'>Home</a>
  
            <a className="navbar-item" href='#about'>About</a>

            <a className="navbar-item" href='#projects-list'>Projects</a>
          {/* <li>Blog</li>
          <li>Contact</li> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar