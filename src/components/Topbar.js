import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default function Topbar() {
    return (
        <div>

            <Navbar bg="dark" variant="dark" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">MF DOOM</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Albums">Albums</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
