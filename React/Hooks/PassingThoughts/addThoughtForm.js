import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <form className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
