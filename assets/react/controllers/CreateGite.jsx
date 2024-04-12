import React, { useState } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

function CreateGite() {

  const [formData, setFormData] = useState({
    giteName: '',
    giteMaxPerson: 0,
    giteDescription: '',
    giteImage: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post('gite/create', formData)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Accordion className='mb-3 dark'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Ajouter un gîte</b></Accordion.Header>
        <Accordion.Body>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="giteName" className="form-label">Nom du gîte</label>
                    <input type="text" className="form-control" id="giteName" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="giteMaxPerson" className="form-label">Nombre de personne</label>
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
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CreateGite;
