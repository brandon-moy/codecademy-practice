import React from 'react';
import ReactDOM from 'react-dom';

const h1 = <h1>Hello World</h1>

const myArticle = <article></article>

const p1 = <p id="large">foo</p>
const p2 = <p id="small">bar</p>

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
)

const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>,
  document.getElementById('app'));