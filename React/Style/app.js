import React from 'react';
import ReactDOM from 'react-dom';

// Inline styles
const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>;

// Make a Style object variables
const styles = {
  background: 'lightblue',
  color: 'darkred'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

// Style Name Syntax
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: '100px',
  fontSize: '50px'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

// Style Value Syntax
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50 // numbers are in px, anything other than px needs to be a string
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
  styleMe,
  document.getElementById('app')
);
