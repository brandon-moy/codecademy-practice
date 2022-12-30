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

// Use State Setter Outside of JSX
const validPhoneNumber = /^\d{1,10}$/; // regex from lesson

export default function PhoneNumber() {
  const [phone, setPhone] = useState("");

  const handleChange = ({ target }) => {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
    }
  };software developerd

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input id='phone-input' value={phone} onChange={handleChange} />
    </div>
  );
}

// Set from Previous State
export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);

  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

  const onFirstQuestion = questionIndex === 0;

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled={onFirstQuestion} onClick={goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

// Arrays in State
export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

// Objects in State
export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prevProfile) => (
      {
        ...prevProfile,
        [name]: value
      }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>

  );
}

// Separate Hooks for Separate States
function Musical() {
  const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"],
        address: "chicago theater"
      },
      SanFrancisco: {
        dates: ["5/2"],
        address: "sf theater"
      }
    }
  })
}

function MusicalRefactored() {
  const [title, setTitle] = useState('Best Musical Ever');
  const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
  const [locations, setLocations] = useState({
    Chicago: {
      dates: ["1/1", "2/2"],
      address: "chicago theater"
    },
    SanFrancisco: {
      dates: ["5/2"],
      address: "sf theater"
    }
  });
}
