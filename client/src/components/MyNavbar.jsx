import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BiBulb } from 'react-icons/bi';

function MyNavbar() {
  const navbarBrandStyle = {
    letterSpacing: '1em', // Add spacing between letters
    color: '#03A9F4',
    fontSize: '150%',
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={navbarBrandStyle} className="mx-auto">
          <BiBulb style={{ marginRight: 50, color: '#FFC107' }} />
          Yeelight Bulb Controller
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
