import React from 'react';
import ReactDOM from 'react-dom';

// class vs className
const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, document.getElementById('app'));

// Self-Closing Tags
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

// JavaScript In Your JSX In Your JavaScript
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
)

// Curly Braces in JSX
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
)

// 20 Digits of Pi in JSX
onst pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
  pi,
  document.getElementById('app')
);

const math = (
  <h1>2 + 3 = {2 + 3}</h1>
)

ReactDOM.render(math, document.getElementById('app'))

// Variables in JSX
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

// Variable Attributes in JSX
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

const gooseImg = (
  <img src={goose} />
)

ReactDOM.render(gooseImg, document.getElementById('app'))

// Event Listeners in JSX
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
  <img
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    onClick={makeDoggy}
    alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));

// JSX Conditionals: If Statements That Do Work
function coinToss() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}

ReactDOM.render(img, document.getElementById('app'));

// JSX Conditionals: The Ternary Operator
function coinToss() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
  img,
  document.getElementById('app')
);

// JSX Conditionals: &&
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
  favoriteFoods,
  document.getElementById('app')
);

// .map in JSXconst people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  return (
  <li>{person}</li>
)
);

ReactDOM.render(<ul>{peopleLis}</ul>,
  document.getElementById('app'))

// Keys
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  return (
  <li key={'person_' + i}>{person}</li>
)
);

ReactDOM.render(<ul>{peopleLis}</ul>,
  document.getElementById('app'))

// React.createElement
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div"
);
