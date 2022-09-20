import './Navbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarComponent() {
  const navLinks = [
    {
      title: 'Link 1',
      path: '#1'
    },
    {
      title: 'Link 2',
      path: '#2'
    },
    {
      title: 'Link 3',
      path: '#3'
    }
  ]

  return (
    <Navbar key="md" expand="md" bg="light" className="w-100 py-3 sticky-top">
      <Container>
        <Navbar.Brand href="#">Mod Posh</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className="">
              <h1 className='small-caps'>menu</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navLinks.map((link, index) => {
                return (
                  <Nav.Link key={index} href={link.path} className="link-line">{link.title}</Nav.Link>
                )
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>        
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
