import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
        <Container>
            <h1>❤ Exercicio Com Frase Motivante ❤</h1>
            <br />
            <Button variant="primary" onClick={handleShow}>
                Frase Incrívelmente Motivante
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Frase Motivante ❤💕</Modal.Title>
                </Modal.Header>
                <Modal.Body>Seus objetivos serão todos realizados graças a Deus e seus dias sempre serão felizes😊🙌</Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Example;