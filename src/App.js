import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import ProjectsList from './containers/ProjectsList'
import './scss/App.scss'
import BlogsList from './containers/BlogsList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <div id="home">
        <Home />
        <NavBar />
      </div>
      <About />
      <ProjectsList />
      <BlogsList />
      <Footer />
    </div>
  )
}

export default App
