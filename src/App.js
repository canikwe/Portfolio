import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import ProjectsList from './containers/ProjectsList'
import './scss/App.scss'

const App = () => {
  return (
    <div className="App">
      <div id="home">
        <Home />
        <NavBar />
      </div>
      <About />
      <ProjectsList />
    </div>
  )
}

export default App
