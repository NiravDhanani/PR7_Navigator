import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link  className="mx-3" to={'/'} href="#home">Home</Link>
              <Link className="mx-3" to={'/view'} href="#features">View</Link>
              {/* <Link className="mx-3" to={'/edit'} href="#pricing">Edit</Link> */}
            </Nav>
          </Container>
        </Navbar>
      <Container>
      </Container>
    </>
  );
};
