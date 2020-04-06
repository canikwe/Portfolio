import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import './scss/App.scss'

const App = () => {
  return (
    <div className="App">
      <div id="home">
        <Home />
        <NavBar />
      </div>
    </div>
  )
}

export default App
