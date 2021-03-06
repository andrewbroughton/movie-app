import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Movie from './components/movie'
import Actor from './components/actor'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Route name="Movie" path="/movie" component={Movie} />
            <Route name="Actor" path="/actor" component={Actor} />
          </div>
        </Router>
      </header>
    </div>
  )
}

export default App
