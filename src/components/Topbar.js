import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import AboutModal from "./AboutModal";
import useLocalStorage from "../hooks/useLocalStorage";
export default function Topbar() {
  const [showAbout, setShowAbout] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  const [showForm, setShowForm] = useState(false);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);


  const [data,setData] = useLocalStorage('data',[])
  function createData(data) {
      setData(previousData => {
          return [...previousData, data]
      })
  }


  const handleSubmit = (e) => {
      e.preventDefault();
      const data = [document.getElementById('1').value,document.getElementById('2').value,document.getElementById('3').value]
      createData(data)
      handleCloseForm();
    };

    



  return (
    <div>
      <Navbar data-testid = "branding" bg="dark" variant="dark" className="shadow">
        <Container>
          <Navbar.Brand datahref="#home">MF DOOM</Navbar.Brand>
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
          <Form.Group className="mw-25">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required id="1"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" required id="2"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" required id="3"/>
          </Form.Group>
          <Button type="submit">Add comment</Button>
        </Form>
      </Modal>
    </div>
  );
}
