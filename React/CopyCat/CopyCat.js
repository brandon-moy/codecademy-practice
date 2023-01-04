import React from 'react';
import { styles } from './styles'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape

    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>Copy Cat</h1>
        <input type='text' value={this.props.value} onChange={this.props.handleChange} />
        <img
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          style={styles.imgStyles}
          onClick={toggleTape}
        />
        <p>
          {copying && this.props.value}
        </p>
      </div>
    );
  };
}
