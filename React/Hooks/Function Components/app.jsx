import React from 'react';
import ReactDOM from 'react-dom';

// Stateless Functional Components
const Friend = () => {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
};

// Function Components and Props
export const NewFriend = (props) => {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
};
