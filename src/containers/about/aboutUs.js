import React from "react";

const AboutUs = ({ name, occupation, yearsActive, thingsWeDo }) => {

  /**
   * Showing different elements based on a value is easy
   * --> the function below will only return an element is there are jobs
   * --> Line 40: This is used on this line
   */
  let doWeHaveJobs = (jobs) => {
    if (jobs) {
      return (
        <div>
          {jobs[0].job}
          <br /><br />
          {jobs[0].description}
          <br /><br />
          {jobs[0].job}
          <br /><br />
          {jobs[0].description}
          <br /><br />
        </div>
      )
    }
    return <div>Some other stuff</div>
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{occupation}</p>
      <p>{yearsActive}</p>
      {doWeHaveJobs(thingsWeDo)}
    </div>
  )
};

export default AboutUs;