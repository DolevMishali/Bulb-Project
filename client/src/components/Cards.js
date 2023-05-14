import BrightnessSlider from './BrightnessSlider';
import Card from 'react-bootstrap/Card';
import ColorPicker from './ColorPicker';
import ColorTempratureSlider from './ColorTempratureSlider';
import ReactButton from 'react-bootstrap/Button';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import './Cards.css';
import './ButtonsStyle.css';
import 'react-datepicker/dist/react-datepicker.css';
import './TimePickerStyle.css';
import { setBrightness } from '../API/bulb';
import Button from 'react-bootstrap/Button';

export const ColorPickerCard = (props) => {
  const colorChanges = (e) => {
    console.log(e);
  };

  return (
    <Card className='card-Wrapper'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br />
        <br />
        <ColorPicker onChange={colorChanges} />
      </Card.Body>
    </Card>
  );
};

export const BulbBrightnessCard = (props) => {
  const brightnessChanged = (brightness) => {
    setBrightness(brightness);
    console.log(brightness);
  };
  return (
    <Card className='card-Wrapper'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br />
        <br />
        <BrightnessSlider value={props.value} onChange={brightnessChanged} />
      </Card.Body>
    </Card>
  );
};

export const BulbTimerCard = (props) => {
  const [selectedTime, setSelectedTime] = useState();
  return (
    <Card className='card-Wrapper'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br />
        <br />
        <DatePicker
          selected={selectedTime}
          onChange={(date) => setSelectedTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={1}
          timeCaption='Time'
          dateFormat='hh:mm:ss'
          className='date-Picker-Wrapper'
          placeholderText='Set Timer'
        />
      </Card.Body>
    </Card>
  );
};

export const TemperatureColorCard = (props) => {
  return (
    <Card className='card-Wrapper'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br />
        <ColorTempratureSlider />
      </Card.Body>
    </Card>
  );
};

export const WeatherCard = (props) => {
  return (
    <Card className='card-Wrapper'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br />
        <br />
        <Button onClick={props.onClick} className='buttons-Wrapper'>
          Start!
        </Button>
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
