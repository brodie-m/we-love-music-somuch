import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
export default function AboutModal() {
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Very Sweet React App About MF DOOM</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Daniel Dumile[a] (/ˈduːməleɪ/ DOO-muh-lay; July 13, 1971[2] – October 31, 2020), best known by his stage name MF Doom or simply Doom (both stylized in all caps), was a British-American rapper and record producer. Noted for his intricate wordplay, signature metal mask, and "supervillain" stage persona, Dumile became a major figure of underground hip hop and alternative hip hop in the 2000s.[3][4] After his death, Variety described him as one of the scene's "most celebrated, unpredictable and enigmatic figures".[5]e.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>

    )
}
