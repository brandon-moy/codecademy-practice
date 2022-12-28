import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Render me!</h1>,
  document.getElementById('app'));

  // Passing a Variable to ReactDOM.render()
const myList = (
  <ul>
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById('app'));
