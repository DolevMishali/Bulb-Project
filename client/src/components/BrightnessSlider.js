import Form from 'react-bootstrap/Form';

function BrightnessSlider() {
  return (
    <>
      <Form.Range defaultValue={0} />
    </>
  );
}

export default BrightnessSlider;

//To add - if the bulb is not connected, need to add 'disabled' to the form.range!
