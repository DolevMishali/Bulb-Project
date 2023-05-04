import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import BrightnessSlider from './BrightnessSlider';

export const ColorPickerCard = () => {
  const handleClick = () => {
    console.log('Button in Card1 clicked!');
    // do something when the button in ColorPicker is clicked
  };

  return (
    <Card className='cardsStyle'>
      <Card.Body>
        <Card.Title>Choose Color</Card.Title>
        <Button variant='primary' onClick={handleClick}>
          Go somewhere
        </Button>
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
        <BrightnessSlider />
        <Button variant='primary' onClick={handleClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default { ColorPickerCard, BulbBrightnessCard };
