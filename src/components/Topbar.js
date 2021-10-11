import React, {useState} from 'react'
import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap'
import AboutModal from './AboutModal'
export default function Topbar() {
    const [showAbout,setShowAbout] = useState(false)
    const handleCloseAbout= () => setShowAbout(false)
    const handleShowAbout = () => setShowAbout(true)

    const [showForm,setFormAbout] = useState(false)
    const handleCloseForm = () => {}
    const handleSubmit = () => {}
    return (
        <div>

            <Navbar bg="dark" variant="dark" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">MF DOOM</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick = {()=>handleShowAbout()}>About</Nav.Link>
                        <Nav.Link>Form</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <Modal show={showAbout} onHide={handleCloseAbout}>
                <AboutModal handleCloseAbout={handleCloseAbout}/>
            </Modal>
            <Modal>
                <Form onSubmit={handleSubmit} show={showForm} onHide = {handleCloseForm}>
                    <Form.Group>
                        
                    </Form.Group>
                </Form>
            </Modal>
        </div>
    )
}
