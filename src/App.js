import React from 'react'
import Home from './components/Home'
// import NavBar from './components/NavBar'
import About from './containers/About'
import ProjectsList from './containers/ProjectsList'
import './scss/App.scss'
import BlogsList from './containers/BlogsList'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Home />
      {/* <NavBar /> */}
      <About />
      <ProjectsList />
      <BlogsList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
