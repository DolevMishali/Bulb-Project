import { useState } from 'react';
import { HuePicker } from 'react-color';

const ColorPicker = ({ onChange }) => {
  // Destructuring the 'onChange' prop from the component's props
  const [color, setColor] = useState(); // State hook to manage the 'color' state

  const changeHandler = (color) => {
    // Event handler function that takes in a 'color' parameter
    setColor(color); // Updates the 'color' state with the new value
    onChange(color.hex); // Calls the 'onChange' prop with the hex value of the color
  };

  // Render the HuePicker component from a color picker library
  return <HuePicker width='200px' color={color} onChange={changeHandler} />;
};

export default ColorPicker;

// options of pickers https://casesandberg.github.io/react-color/
