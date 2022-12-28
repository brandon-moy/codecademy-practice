import React from 'react';
import ReactDOM from 'react-dom';

// Hello World, Part II... THE COMPONENT
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

// Create a Component Class
class x extends React.Component { }

// Name a Component Class
class MyComponentClass extends React.Component { }

// The Render Function
class MyComponentClass extends React.Component {
  render() {
    return (
      <h1>Hello world</h1>
    )
  }
}

// Create a component Instance
<MyComponentClass />

// Render A Component
ReactDOM.render(<MyComponentClass />, document.getElementById('app'))
