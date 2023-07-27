import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand href="#">Holly Tree Daycare</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />                
        </Navbar>
    )
}