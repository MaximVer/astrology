import React from 'react'
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Navbar.Brand href="/">Lena Moon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/review">Review</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )

};
export default NavBar;