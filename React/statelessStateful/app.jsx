import React from 'react';
import ReactDOM from 'react-dom';

// Build a stateful Component class
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' }
  }
  render() {
    return <Child name={this.state.name} /> // Pass a Component's State
  }
}

// Build a stateless component class
class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
