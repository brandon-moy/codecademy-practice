import React, { useState } from 'react';

// Update Function Component State
export default function ColorPicker() {
  const [color, setColor] = useState();
  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

// Initialize State
const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');
  // You can use set the initial state by passing the value as an argument to useState
  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button
          onClick={() => setColor(colorName)}
          key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
}
