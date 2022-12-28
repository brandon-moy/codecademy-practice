import React from 'react';
import ReactDOM from 'react-dom';

// Access a Component's props
class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <PropsDisplayer myProp='Hello' />, // updated for Pass 'props' to a Component
  document.getElementById('app')
)

// Render a Component's props
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Jorge' />,
  document.getElementById('app')
);

// Pass props from Component to Component
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="name" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}
