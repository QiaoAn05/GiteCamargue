import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteGite({id}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {

    axios.delete(`gite/delete/${id}`)
      .then(response=> {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error=> {
        console.error('Erreur lors de la suppression du gîte :', error);
      })
  };

  return (
    <>
      <i className="bi bi-trash text-danger" variant="primary" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >Voulez-vous supprimer ce gîte?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteGite;