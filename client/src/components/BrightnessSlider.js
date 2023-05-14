import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

const BrightnessSlider = ({ onChange, value }) => {

  const [brightness, setBrightness] = useState();

  const changeHandler = (brightness) => {
    setBrightness(brightness.target.valueAsNumber);
    onChange(brightness.target.valueAsNumber);
  };

  const mouseUpHandler = () => {
    onChange(brightness);
  };

  return (
    <Form.Range
      defaultValue={0}
      width='200px'
      //value={value}
      brightness={brightness}
      onChange={changeHandler}
      onMouseUp={mouseUpHandler}
    />
  );
};

export default BrightnessSlider;

//To add - if the bulb is not connected, need to add 'disabled' to the form.range!
//To add - onChange
