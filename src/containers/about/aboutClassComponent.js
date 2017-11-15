import React, { Component } from 'react';

export class AboutUsClassComponent extends Component {

  // This one will show on page load
  componentWillMount() {
    console.log('Component will mount');
  }

  // This one will show on page load
  componentDidMount() {
    console.log('Component did mounted');
  }

  // This one will NOT show on page load
  shouldComponentUpdate() {
    console.log('Should Component Mount');
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
  componentWillReceiveProps() {
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
