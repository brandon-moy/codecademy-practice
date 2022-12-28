import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

const background = (
  <img
    className='background'
    alt='ocean'
    src='/images/ocean.jpg' />
);

const images = [];

for (const animal in animals) {
  images.push(
    (
      <img
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
        onClick={displayFact} />
    )
  )
};

function displayFact(e) {
  const animal = e.target.alt;
  const factPosition = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[factPosition];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>
      {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
    { showBackground && background }
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
)


ReactDOM.render(animalFacts, document.getElementById('root'));
