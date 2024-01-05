import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  )
}

export default App
