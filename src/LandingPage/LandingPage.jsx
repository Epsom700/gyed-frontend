import './LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <Navbar className='search'>
      <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='searchBar1'>
          <input type="search" className='searchBar2' placeholder='Search' />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LandingPage