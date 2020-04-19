import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './containers/About'
import ProjectsList from './containers/ProjectsList'
import './scss/App.scss'
// import '../node_modules/bulma-carousel/dist/css/bulma-carousel.min.css'
import BlogsList from './containers/BlogsList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <ProjectsList />
      <BlogsList />
      <Footer />
    </div>
  )
}

export default App
