import React from 'react'

import AboutUs from './aboutUs'

let name= "rob";
let occupation = "Software Developer";
let years = 10000;
let thingsToDo = [
  {
    job: "an example Thing",
    description: "I do a thing all the time. Do all the things"
  },
  {
    job: "Second Thing",
    description: "Some more things I do all the time. Done all the things"
  }
]

export default () => (
  <div>
    <h1>About Us</h1>
    <p>Hello Medium!</p>
    <AboutUs name={name} occupation={occupation} yearsActive={years} thingsWeDo={thingsToDo}/>
    <br />
    <AboutUs />
  </div>
)