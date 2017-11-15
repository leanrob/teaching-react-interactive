import React from "react";
import PropTypes from "prop-types";

const AboutUs = ({ name, occupation, yearsActive, thingsWeDo }) => {

  // Below is completely equivalent
  // could also do...

  // const AboutUs = ({ props }) => {
  // const { name, occupation, yearsActive, thingsWeDo } = props;

  // -------------

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
    return <div />
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

/**
 * PropTypes: are used to express what the component expects to see in terms of props
 * --> Line 28: Props can be set to be required by setting `X.isRequired`
 */
AboutUs.propTypes = {
  // exampleProp: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  yearsActive: PropTypes.number,
  thingsWeDo: PropTypes.arrayOf(
    PropTypes.shape({
      job: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

/**
 * defaultProps: prop defaults
 * --> These are the props the component will use if it is not passed a prop of that type
 */
AboutUs.defaultProps = {
  name: "John Doe",
  occupation: "Does Nothing",
  yearsActive: 0,
};

export default AboutUs;
