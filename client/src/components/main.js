import DetailsOverLay from './DetailsOverLay';
//import SwitchOnOff from './SwitchButtonOnOff';
import ButtonCard from './Cards';
import { Row, Col, Container } from 'react-bootstrap';
import ReactButton from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import './ButtonsStyle.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { getBulbData, setPower, setWeatherMode } from '../API/bulb';

function Main() {
  const [showContainer, setShowContainer] = useState(false);
  const [isBulbOn, setIsBulbOn] = useState(false);
  const [bulbBrightness, setBulbBrightness] = useState(false);
  const buttonValue = 'some value'; // change this to the actual value of the button

  const handleClick = () => {
    if (buttonValue) {
      setShowContainer(true);
    } else {
      setShowContainer(false);
    }
  };

  useEffect(() => {
    getBulbData().then((json) => {
      setIsBulbOn(json.power === 'on');
      setBulbBrightness(json.bright);
    });
  });

  const expenses = [
    { title: 'Choose Color' },
    { title: 'Brightness' },
    { title: 'Bulb Timer' },
    { title: 'Set Temperature Color' },
    { title: 'Weather Mode' },
  ];
  return (
    <div>
      {showContainer ? (
        <>
          <div>
            <Container>
              <Row className='justify-content-center'>
                <Col xs={12} md={6} className='d-flex align-items-center'>
                  <DetailsOverLay />
                </Col>
                <Col xs={12} md={6} className='d-flex align-items-center'>
                  {/* <SwitchOnOff /> */}
                  <BootstrapSwitchButton
                    checked={isBulbOn}
                    onChange={(checked) => {
                      setPower(checked);
                    }}
                    size='sm'
                  />
                </Col>
              </Row>

              <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                  <ButtonCard.ColorPickerCard title={expenses[0].title} />
                </Col>
                <Col xs={12} md={6}>
                  <ButtonCard.BulbBrightnessCard
                    value={bulbBrightness}
                    title={expenses[1].title}
                  />
                </Col>
              </Row>

              <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                  <ButtonCard.BulbTimerCard title={expenses[2].title} />
                </Col>
                <Col xs={12} md={6}>
                  <ButtonCard.TemperatureColorCard title={expenses[3].title} />
                </Col>
              </Row>

              <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                  <ButtonCard.WeatherCard
                    onClick={setWeatherMode}
                    title={expenses[4].title}
                  />
                </Col>
              </Row>
            </Container>
          </div>

          <ReactButton
            className='buttons-Wrapper'
            onClick={() => setShowContainer(false)}
          >
            Hide Container
          </ReactButton>
        </>
      ) : (
        <ReactButton
          className='buttons-Wrapper'
          onClick={handleClick}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '390px',
            height: '100px',
            fontSize: '25px',
            letterSpacing: '1rem',
            margin: '0 auto',
            marginTop: '10rem',
          }}
        >
          Discover Bulb
        </ReactButton>
      )}
    </div>
  );
}

export default Main;

/*
Primary:

    #FFC107 (yellow)
    #03A9F4 (blue)

Secondary:

    #8BC34A (green)
    #FF5722 (orange)

Neutral:

    #E0E0E0 (light gray)
    #9E9E9E (gray)
    #212121 (dark gray) 
*/
