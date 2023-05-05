import BrightnessSlider from './BrightnessSlider';
import Card from 'react-bootstrap/Card';
import ColorPicker from './ColorPicker';
import ColorTempratureSlider from './ColorTempratureSlider';
import ReactButton from 'react-bootstrap/Button';
import React from 'react';
import './Cards.css';
import './ButtonsStyle.css';

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
        <br />
        <input
          className='buttonsStyle'
          type='time'
          value='00:00:00'
          style={{ borderRadius: '5px', border: '2px solid', color: 'white' }}
        ></input>
      </Card.Body>
    </Card>
  );
};

export const TemperatureColorCard = () => {
  const handleClick = () => {
    console.log('Button in Card2 clicked!');
    // do something when the button in Card2 is clicked
  };

  return (
    <Card className='cardsStyle'>
      <Card.Body>
        <Card.Title>Set Temperature Color</Card.Title>
        <br />
        <ColorTempratureSlider />
      </Card.Body>
    </Card>
  );
};

export const WeatherCard = () => {
  const handleClick = () => {
    console.log('Button in Card2 clicked!');
    // do something when the button in Card2 is clicked
  };

  return (
    <Card className='cardsStyle'>
      <Card.Body>
        <Card.Title>Weather Mode</Card.Title>
        <br />
        <br />
        <ReactButton className='buttonsStyle'>Start!</ReactButton>
      </Card.Body>
    </Card>
  );
};

export default {
  ColorPickerCard,
  BulbBrightnessCard,
  BulbTimerCard,
  TemperatureColorCard,
  WeatherCard,
};
