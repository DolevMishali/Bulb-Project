import BrightnessSlider from './BrightnessSlider';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import ColorPicker from './ColorPicker';
import './Cards.css';

export const ColorPickerCard = () => {
  const handleClick = () => {
    console.log('Button in Card1 clicked!');
    // do something when the button in ColorPicker is clicked
  };

  return (
    <Card className='cardsStyle'>
      <Card.Body>
        <Card.Title>Choose Color</Card.Title>
        <br />
        <ColorPicker />
      </Card.Body>
    </Card>
  );
};

export const BulbBrightnessCard = () => {
  const handleClick = () => {
    console.log('Button in Card2 clicked!');
    // do something when the button in Card2 is clicked
  };

  return (
    <Card className='cardsStyle'>
      <Card.Body>
        <Card.Title>Brightness</Card.Title>
        <br />
        <BrightnessSlider />
      </Card.Body>
    </Card>
  );
};

export const BulbTimerCard = () => {
  const handleClick = () => {
    console.log('Button in Card2 clicked!');
    // do something when the button in Card2 is clicked
  };

  return (
    <Card className='cardsStyle'>
      <Card.Body>
        <Card.Title>Bulb Timer</Card.Title>
        <br />
        <input
          type='time'
          value='00:00:00'
          style={{ borderRadius: '5px', border: '2px solid blue' }}
        ></input>
      </Card.Body>
    </Card>
  );
};

export default { ColorPickerCard, BulbBrightnessCard, BulbTimerCard };
