import React from 'react';

export default function () {
    
    return <>
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">LE MAS GUINOT</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">A propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gite">Nos Gîtes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tarifs">Tarifs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Connection/Déconnection</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      </>
}
