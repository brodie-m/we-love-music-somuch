import React, {useState} from 'react'
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap'
import AboutModal from './AboutModal'
export default function Topbar() {
    const [show,setShow] = useState(false)
    const handleClose= () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>

            <Navbar bg="dark" variant="dark" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Button onClick = {()=>handleShow()}>About</Button>
                        <Nav.Link>Something</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <AboutModal handleClose={handleClose}/>
            </Modal>
        </div>
    )
}
