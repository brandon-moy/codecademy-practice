import React from 'react';
import ReactDOM from 'react-dom';

// Settin Initial State
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' }
  }

  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

// Access a Component's State (changed lin 14)

// Call this.setState from another function
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.color === green) {
      this.setState({ color: yellow })
    } else {
      this.setState({ color: green })
    }
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />,
  document.getElementById('app'))
