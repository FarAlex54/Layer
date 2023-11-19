import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignLogin = () => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
  return (
    <div>
        <Modal.Header closeButton>
          <Modal.Title>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>
        <Modal.Footer>
          <div></div>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
    </div>
  )
}

export default SignLogin