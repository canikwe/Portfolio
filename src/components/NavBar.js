import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [navToggle, updateNavToggle] = useState(false)
  let ss
  let nav

  useEffect(() => {
    window.addEventListener('scroll', myFunction)
    nav = document.querySelector('.navbar')
    ss = nav.offsetTop
  }, [])

  
  const myFunction = e => {
    if (window.pageYOffset >= ss) {
      nav.classList.add("is-fixed-top")
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
            <a className="navbar-item" href='#blogs-list'>Blogs</a>
            <a className="navbar-item" href='#contact'>Contact</a>
            <a className="navbar-item" href='#resume'>Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar