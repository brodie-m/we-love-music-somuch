import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Description() {
    const [show,setShow] = useState(false)
    const handleClose= () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}
