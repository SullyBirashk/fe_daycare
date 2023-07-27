import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand href='#'>Holly Tree Daycare</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarNav' />
            <Navbar.Collapse id='navbarNav'>
                <Nav className='mr-auto'>
                    <Navbar.Brand href='#'>About Us</Navbar.Brand>
                    <Navbar.Brand href='#'>Schedule Tour</Navbar.Brand>
                    <Navbar.Brand href='#'>Contact Us</Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}