import React from 'react';
import ReactDOM from 'react-dom';

// Use Multiline JSX in a Component
class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

// Use a Variable Attribute in a Component
const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {owl.title}
        </h1>
        <img
          src={owl.src}
          alt={owl.title} />
      </div>
    )
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
)

// Put Logic in a Render Function
const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component {
  render() {
    const friend = friends[2];
    return (
      <div>
        <h1>
          {friend.title}
        </h1>
        <img src={friend.src} />
      </div>
    )
  }
}

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
)

// Use a Conditional in a Render Function
const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    const plan = fiftyFifty ? 'out' : 'to bed'
    return (
      <h1>Tonight I&apos;m going {plan} WOOO</h1>
    )
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
)

// Use this in a Component
class MyName extends React.Component {
  get name() {
    return 'whatever-your-name-is-goes-here'
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

// Use an Event Listener in a Component
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('app')
)
