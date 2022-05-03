import React from 'react';
import '../styles/App.css';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import { NavbarBrand } from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return <>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" >
                <Container>
                    {/* The Branding item, clickable to take home */}
                    <NavbarBrand as={Link} to={"/"+ this.props.homePage.toLowerCase()}><h3>Josh Parker</h3></NavbarBrand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* Allows for collapsing on small screen */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" defaultActiveKey={this.props.homePage}>
                            {/* The slectable categories */}
                            {this.props.pages.map((page) => <Nav.Link as={Link} key={page} eventKey={page} to={"/"+ page.toLowerCase()}><h5>{page}</h5></Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    }
}

export default NavBar;