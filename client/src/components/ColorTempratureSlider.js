import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function Slider() {
  const [value, setValue] = useState(4100);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
  };

  const handleSliderChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div>
      <RangeSlider
        min={1700}
        max={6500}
        value={value}
        onChange={handleSliderChange}
      />
      <div>
        <input
          type='number'
          value={value}
          onChange={handleChange}
          style={{ width: '45%' }}
        />
      </div>
    </div>
  );
}

export default Slider;
//TODO - onChange
