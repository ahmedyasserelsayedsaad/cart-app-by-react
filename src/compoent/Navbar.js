import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  const cart=useSelector((state)=>state.cart)
  const fav=useSelector((state)=>state.fav)
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary px-5 " >
        <Container >
          <NavLink to="/" className="navbar-brand" style={{color:'black',fontFamily:'cursive',fontSize:'30px'}}>Cart App</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="navbar-brand">products</NavLink>
              <NavLink to="/cart" className="navbar-brand">cart -({cart.length})</NavLink>
              <NavLink to="/fav" className="navbar-brand">favourit -({fav.length})</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default AppNavbar;