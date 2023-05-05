import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BiBulb } from 'react-icons/bi';
import './MyNavbar.css';

function MyNavbar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container style={{ width: 'auto' }}>
        <Navbar.Brand className='navbarStyle'>
          <BiBulb
            style={{
              marginRight: 50,
              color: '#FEDC56',
              fontSize: '25px',
              marginBottom: '5px',
            }}
          />
          Yeelight Bulb Controller
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
