import React, { useState, useEffect, useRef } from 'react'

export const NavBar = () => {
  const [navToggle, updateNavToggle] = useState(false)
  const nav = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const top = nav.current?.offsetTop

    window.addEventListener('scroll', () => {
      if (top && window.scrollY >= top) {
        nav.current?.classList.add('is-fixed-top')
      } else {
        nav.current?.classList.remove('is-fixed-top')
      }
    })
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" ref={nav}>
      <div className="navbar-brand">
        <span
          role="button"
          className={navToggle ? 'navbar-burger burger is-active' : 'navbar-burger burger'}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => updateNavToggle(!navToggle)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className={navToggle ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className="navbar-start">
          <a className="navbar-item" href="#home">
            Home
          </a>

          <a className="navbar-item" href="#about">
            About
          </a>
          <a className="navbar-item" href="#projects-list">
            Projects
          </a>
          <a className="navbar-item" href="#blogs-list">
            Blogs
          </a>
          <a className="navbar-item" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
