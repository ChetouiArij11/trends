import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const ModalComponent = () => {
 const [show, setShow] = useState(false);
 const handleShow = () => setShow(true);
 const handleClose = () => setShow(false);
 return (
   <>
     <Button variant="primary" onClick={handleShow}>
       Ouvrir la Modal
     </Button>
     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Titre de la Modal</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         Contenu de la Modal...
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Fermer
         </Button>
       </Modal.Footer>
     </Modal>
   </>
 );
};
export default ModalComponent;









