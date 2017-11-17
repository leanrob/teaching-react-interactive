import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/actions/counterActions'

const Home = ({ count, increment, incrementAsync, isIncrementing, decrement, isDecrementing, decrementAsync, changePage}) => (
  <div>
    <h1>Home</h1>
    <p>Count: {count}</p>

    <p>
      <button onClick={increment} disabled={isIncrementing}>Increment</button>
      <button onClick={incrementAsync} disabled={isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={decrement} disabled={isDecrementing}>Decrementing</button>
      <button onClick={decrementAsync} disabled={isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => changePage()}>Go to about page via redux</button></p>
  </div>
);

/**
 * State: Do not access it directly
 * Below is how we access the state through Redux
 * --> Do not access the state or manipulate it directly
 * --> The state of the application come from the Redux Store
 * Note: The Redux store must be the one source of truth in the application
 */
const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
