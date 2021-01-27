import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

export const NavBar = () => {
  return (
    <Navbar fixed='top' collapseOnSelect style={{backgroundColor:'#15202B'}} expand="lg">
            <Navbar.Brand style={{color: '#1DA1F2', fontSize:"25px"}}href="/">Bryant H</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{color: 'white'}}href="#about">About</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#experience">Experience</Nav.Link>
                    <Nav.Link style={{color: 'white'}}href="#projects">Projects</Nav.Link>
                    {/* <Nav.Link style={{color: 'white'}}href="#contact">Contact</Nav.Link> */}
                    
                    
                    
                </Nav>
                <Nav>
                    <Nav.Link style={{color: 'white'}} href="/Resume_BryantH.pdf">Resume <span> <FontAwesomeIcon color="#1DA1F2" icon={faFile}></FontAwesomeIcon></span></Nav.Link>
                    <Nav.Link style={{color: 'white'}}href="//github.com/bryant273092">GitHub <span > <FontAwesomeIcon color="#1DA1F2" icon={faGithub}></FontAwesomeIcon></span></Nav.Link>
                    <Nav.Link style={{color: 'white'}}href="https://www.linkedin.com/in/bryant-hernandez-03a855128/">Linkedln <span > <FontAwesomeIcon color="#1DA1F2" icon={faLinkedin} /></span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
  )
}