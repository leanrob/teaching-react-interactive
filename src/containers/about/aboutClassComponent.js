import React, { Component } from 'react';

export class AboutUsClassComponent extends Component {

	/**
     * Lifecycle methods fire at different time in the components lifecycly
     * See this link for a more detailed explanation...
     * [http://busypeoples.github.io/post/react-component-lifecycle/](Lifecycle Methods)
	 */

	constructor(props) {
	  super(props)
  }

	// This one will show on page load
  componentWillMount() {
    // Fired just BEFORE the component mounts on the virtual DOM
    console.log('Component will mount');
  }

  // This one will show on page load
  componentDidMount() {
    // Fired just AFTER the component mounts on the virtual DOM
    console.log('Component did mounted');
  }

  // This one will NOT show on page load
  shouldComponentUpdate() {
    // This can be used to tell a component not to update, even if it's parent component is updating
    console.log('Should component update');
    return true;
  }

  // This one will NOT show on page load
  componentWillUpdate() {
    console.log('Component will update');
  }

  // This one will NOT show on page load
  componentDidUpdate() {
    console.log('Component did update');
  }

  // This one will NOT show on page load
  componentWillReceiveProps(prevProps, nextProps) {
    console.log('Component receive props');
  }

  render() {
    return (
      <div className="example">
        Class Component
      </div>
    );
  }
}
