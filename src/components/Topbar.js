import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import AboutModal from "./AboutModal";
export default function Topbar() {
  const [showAbout, setShowAbout] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  const [showForm, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  const handleSubmit = () => {};
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="shadow">
        <Container>
          <Navbar.Brand href="#home">MF DOOM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleShowAbout()}>About</Nav.Link>
            <Nav.Link onClick={() => handleShowForm()}>Add a comment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={showAbout} onHide={handleCloseAbout}>
        <AboutModal handleCloseAbout={handleCloseAbout} />
      </Modal>
      <Modal show={showForm} onHide={handleCloseForm}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Form>
      </Modal>
    </div>
  );
}
