import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditGite({ id }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    giteName: '',
    giteMaxPerson: 0,
    giteDescription: '',
    giteImage: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
	  axios.post(`gite/edit/${id}`, formData)
	  .then(response => {
      console.log('Gîte modifié avec succès', response.data);
      window.location.reload();
    })
    .catch (error=> {
      console.error('Erreur lors de la modification du gîte :', error);
    });
  };

  return (
    <>
      <i className="bi bi-pencil-square text-success  me-2" variant="primary" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le gîte</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="giteName" className="form-label">Nom du gîte</label>
              <input type="text" className="form-control" id="giteName" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="giteMaxPerson" className="form-label">Nombre de personnes</label>
              <input type="number" className="form-control" id="giteMaxPerson" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="giteDescription" className="form-label">Description</label>
              <textarea className="form-control" id="giteDescription" rows="3" onChange={handleInputChange}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="giteImage" className="form-label">Image</label>
              <input type="file" className="form-control" id="giteImage" onChange={handleInputChange} />
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Annuler
              </Button>
              <Button variant="primary" type="submit">
                Modifier
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditGite;