import DetailsOverLay from './DetailsOverLay';
import SwitchOnOff from './SwitchButtonOnOff';
import FigureTemplate from './Figure';
import { Row, Col, Container } from 'react-bootstrap';
function Main() {
  return (
    <>
      <Container>
        <Row>
          <h1 className='cols'>2354234</h1>
          <h1 className='cols'>2354234</h1>
          <h1 className='cols'>2354234</h1>
          <Col style={{ padding: '0' }}>
            <h1 style={{ border: '1px solid black' }}>2354234</h1>
            <h1 style={{ border: '1px solid black' }}>2354234</h1>
            <h1 style={{ border: '1px solid black' }}>2354234</h1>
          </Col>
        </Row>
      </Container>

      {/* <DetailsOverLay />
      <SwitchOnOff /> */}
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
