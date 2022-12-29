import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.light ? 'light-button' : 'dark-button'}
        onClick={this.props.onClick} >
        Refresh
      </button>
    );
  }
}

// Bonus question: Why is the button light or dark based on the background?

// The button calls the isLight function which reduces the number and checks if
// the value is a "light" color
// it evaluates and returns a boolean value which is then passed to the button
// component through the light prop

// in the Button component, it utilizes a ternary expression to determine if the
// light value that was passed as a prop is true or false and then changes
// the color of the button

// this same logic is used when determinining whether the text on screen
// should be white or black
