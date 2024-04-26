import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


interface Props {
    onScroll: () => void
}

function MyNavbar(props: Props) {
   
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" style={{margin: 0, paddingLeft: 0}}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Petrik Autókölcsönző</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="https://www.petrik.hu" target='_blank'>Petrik honlap</Nav.Link>
                <Nav.Link onClick={props.onScroll}>Új autó felvétele</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
}

export default MyNavbar;