import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Redux from '../redux'

const App = () => (
  <div className="main">
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/redux">Redux</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/redux" component={Redux} />
    </main>
    {/*This is how you comment code in JSX*/}
  </div>
)

export default App

/**
 * JSX Introduction
 * --> JSX is simply HTML-like syntax that is returned by a javascript function
 * --> Line 6-21 > this case the JS function is an arrow function.
 * --> Line 23 > This component is then exported for use elsewhere in the app
 * Note: Line 7-20 > Each JSX component MUST have ONE top level div, otherwise it will rage out
 * --> Line 17 > see how to comment out JSX code
 * --> Line 7 > Some elements of HTML syntax need to change and will be converted on render (Such as className) see link [http://www.javascripter.net/faq/reserved.htm]
 * @constructor
 */