import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  updateName
} from '../../modules/actions/personActions'

const Redux = ({ name, updateName }) => {
  return (
    <div>
      <h1>Redux</h1>
      <p>Name: {name}</p>
      <button onClick={() => updateName("Robert")}>Rob</button>
      <button onClick={() => updateName("Not Robert")}>NOT Rob</button>
    </div>
  )
};

/**
 * State: Do not access it directly
 * Below is how we access the state through Redux
 * --> Do not access the state or manipulate it directly
 * --> The state of the application come from the Redux Store
 * Note: The Redux store must be the one source of truth in the application
 */
const mapStateToProps = state => ({
  name: state.person.name ? state.person.name : ""
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateName
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux)
