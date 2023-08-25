import React from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import logo from '../assets/images/company_logo.png'
import './Header.css'

export const Header = () => 
        <Navbar bg="light" expand="sm">
            <div>
                <Navbar.Toggle className="mx-2" aria-controls="navbarNav" />
                <Navbar.Brand className="mx-2" href="/">
                    <img className="logo" src={logo} />
                </Navbar.Brand>
            </div>
            
            <Navbar.Offcanvas
                id="offcanvasNavbar-expand-sm"
                aria-labelledby="offcanvasNavbarLabel-expand-sm"
                placement="end"
            >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Navbar.Brand href="/about">About Us</Navbar.Brand>
                    <Navbar.Brand href="/schedule">Schedule Tour</Navbar.Brand>
                    <Navbar.Brand href="/contact">Contact Us</Navbar.Brand>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>