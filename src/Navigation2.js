import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation2() {
  return (
    <>

      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/users">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </>
  );
}

export default Navigation2;