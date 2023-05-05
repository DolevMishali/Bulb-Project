import DetailsOverLay from './DetailsOverLay';
import SwitchOnOff from './SwitchButtonOnOff';
import ButtonCard from './Cards';
import { Row, Col, Container } from 'react-bootstrap';
import ReactButton from 'react-bootstrap/Button';
import { useState } from 'react';
import './ColsRows.css';
import './ButtonsStyle.css';

function Main() {
  const [showContainer, setShowContainer] = useState(false);
  const buttonValue = 'some value'; // change this to the actual value of the button

  const handleClick = () => {
    if (buttonValue) {
      setShowContainer(true);
    } else {
      setShowContainer(false);
    }
  };

  return (
    <div>
      {showContainer ? (
        <>
          <Container>
            <Row style={{ marginTop: '30px', marginBottom: '40px' }}>
              <DetailsOverLay />
              <SwitchOnOff />
              <toggle />
            </Row>
            <Row>
              <Row className='m-auto'>
                <Col>
                  <ButtonCard.ColorPickerCard />
                </Col>
                <Col>
                  <ButtonCard.BulbBrightnessCard />
                </Col>
              </Row>
              <Row className='m-auto'>
                <Col>
                  <ButtonCard.BulbTimerCard />
                </Col>
                <Col>
                  <ButtonCard.TemperatureColorCard />
                </Col>
              </Row>
              <Row className='m-auto'>
                <Col>
                  <ButtonCard.WeatherCard />
                </Col>
              </Row>
            </Row>
          </Container>
          <ReactButton
            className='buttonsStyle'
            onClick={() => setShowContainer(false)}
          >
            Hide Container
          </ReactButton>
        </>
      ) : (
        <ReactButton
          className='buttonsStyle'
          onClick={handleClick}
          style={{
            marginLeft: '35%',
            marginTop: '10%',
            width: '390px',
            height: '100px',
            fontSize: '25px',
            letterSpacing: '1rem',
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
