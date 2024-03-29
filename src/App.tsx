import React from 'react'
import { Home } from './Home/Home'
import { About } from './About/About'
import { ProjectsList } from './Projects/ProjectsList'
import { BlogsList } from './Blogs/BlogsList'
import { Contact } from './Contact/Contact'
import { Footer } from './Footer/Footer'
import { NavBar } from './Home/NavBar'
import './scss/App.scss'

const App = () => {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <ProjectsList />
      <BlogsList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
