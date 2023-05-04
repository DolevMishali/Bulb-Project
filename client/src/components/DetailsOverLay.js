// Importing necessary modules
import React, { useState, useRef } from 'react'; // Importing React library, useState and useRef hooks
import Button from 'react-bootstrap/Button'; // Importing Button component from react-bootstrap
import Overlay from 'react-bootstrap/Overlay'; // Importing Overlay component from react-bootstrap
import './DetailsOverLay.css'; // Importing custom CSS styles

function OverLayDetails() {
  // Declaring state and reference variables using useState and useRef hooks respectively
  const [show, setShow] = useState(false); // show is the state variable that holds the visibility state of the overlay, setShow is the function to update the state
  const target = useRef(null); // target is the reference variable that holds the reference to the button which triggers the overlay

  return (
    <>
      {/* Button component from react-bootstrap with a ref pointing to the target reference variable and an onClick event to toggle the visibility state of the overlay */}
      <Button
        variant='danger'
        ref={target}
        onClick={() => setShow(!show)}
        className='myOverLay'
      >
        Bulb Details
      </Button>
      {/* Overlay component from react-bootstrap with target set to the current value of the target reference variable, show set to the current value of the show state variable, and placement set to 'right' */}
      <Overlay target={target.current} show={show} placement='right'>
        {/* Rendering the content of the overlay using a render prop that provides access to various properties such as placement, arrowProps, and popper */}
        {({
          placement: _placement, // Unused placement property
          arrowProps: _arrowProps, // Unused arrowProps property
          show: _show, // Unused show property
          popper: _popper, // Unused popper property
          hasDoneInitialMeasure: _hasDoneInitialMeasure, // Unused hasDoneInitialMeasure property
          ...props // Remaining properties passed as props to the rendered content
        }) => (
          // Div element that renders the content of the overlay, with the className set to 'my-overlay' and style set to the combined value of props.style and inline CSS styles
          <div {...props} className='afterClick' style={{ ...props.style }}>
            <ul>
              <li>Bulb Name</li>
              <li>Bulb </li>
              <li>Bulb </li>
            </ul>
          </div>
        )}
      </Overlay>
    </>
  );
}

// Exporting the OverLayDetails component as the default export of this module
export default OverLayDetails;
