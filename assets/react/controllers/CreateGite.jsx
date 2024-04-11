import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function CreateGite() {
  return (
    <Accordion className='mb-3 dark'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Ajouter un gîte</b></Accordion.Header>
        <Accordion.Body>
            <form>
                <div className="mb-3">
                    <label htmlFor="giteName" className="form-label">Nom du gîte</label>
                    <input type="text" className="form-control" id="giteName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="giteMaxPerson" className="form-label">Nombre de personne</label>
                    <input type="text" className="form-control" id="giteMaxPerson" />
                </div>
                <div className="mb-3">
                    <label htmlFor="giteDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="giteDescription" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="giteImage" className="form-label">Image</label>
                    <input type="file" className="form-control" id="giteImage" />
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CreateGite;