import React, { useState } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

function CreateGite() {

  const [formData, setFormData] = useState({
    giteName: '',
    giteMaxPerson: 0,
    giteDescription: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImage = (e) => {
    setFormData({ ...formData, giteImageFile: e.target.files[0] });
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('giteName', formData.giteName);
    formDataToSend.append('giteMaxPerson', formData.giteMaxPerson);
    formDataToSend.append('giteDescription', formData.giteDescription);
    formDataToSend.append('imageFile', formData.giteImageFile); // La clé est 'imageFile'
  
    axios.post('/gite/create', formDataToSend)
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
                    <label htmlFor="giteImageFile" className="form-label">Image</label>
                    <input type="file" className="form-control" id="giteImageFile" name='file' onChange={handleImage} />
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CreateGite;