import { Navbar, Container, Nav, NavDropdown  } from "react-bootstrap"
import { icons } from "react-icons"
import {IoMdPaperPlane} from "react-icons/io"
const NavigationBar = () => {
  return (
    <div>
    <Navbar className = "Navbar">
      <Container>
        <div className="icon">
        <IoMdPaperPlane/>
        </div>
        <Navbar.Brand href="/">ADMIN SWIFT E-LEARNING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/PTugas">Tugas</Nav.Link>
            <Nav.Link href="/DataMember">Data Member</Nav.Link>
            <Nav.Link href="/DataMentor">Data Mentor</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Register Admin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profil">
                Manage Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar