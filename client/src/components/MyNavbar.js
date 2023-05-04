import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BiBulb } from 'react-icons/bi';

function MyNavbar() {
  const navbarBrandStyle = {
    letterSpacing: '1em',
    fontSize: '150%',
    background:
      'linear-gradient(90deg, rgba(58,139,180,1) 0%, rgba(255,255,255,1) 100%)',
    '-webkit-background-clip': 'text' /* Add this for Safari compatibility */,
    '-webkit-text-fill-color':
      'transparent' /* Add this for Safari compatibility */,
  };

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand style={navbarBrandStyle} className='mx-auto'>
          <BiBulb style={{ marginRight: 50, color: '#FFC107' }} />
          Yeelight Bulb Controller
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
