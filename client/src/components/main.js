import DetailsOverLay from './DetailsOverLay';
import SwitchOnOff from './SwitchButtonOnOff';
import ButtonCard from './Cards';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Main() {
  return (
    <>
      <Container>
        <Row>
          <Button variant='primary' className='colsheader'>
            Weather Mode
          </Button>{' '}
          <Button variant='primary' className='colsheader'>
            Bulb Timer
          </Button>{' '}
          <Button variant='primary' className='colsheader'>
            Primary
          </Button>{' '}
          <SwitchOnOff />
          <Row>
            <ButtonCard.ColorPickerCard />
            <ButtonCard.BulbBrightnessCard />
            <ButtonCard.BulbTimerCard />
          </Row>
        </Row>
      </Container>
      {/* <DetailsOverLay />
       */}
    </>
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
