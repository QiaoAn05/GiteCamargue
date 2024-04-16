import React, { useState, useEffect } from 'react';

export default function () {
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);
  
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
              <a className={`nav-link ${activeLink === '/' ? 'active' : ''}`} aria-current="page" href="/">Accueil</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} href="/about">A propos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === '/gite' ? 'active' : ''}`} href="/gite">Nos Gîtes</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === '/tarifs' ? 'active' : ''}`} href="/tarifs">Tarifs</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Connexion</a>
              <a className="nav-link" href="/logout">Déconnexion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </>
}
