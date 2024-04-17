import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function () {
  const [activeLink, setActiveLink] = useState('/');
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  useEffect(() => {
    axios.get('/api/user')
        .then(response => {
            setIsLoggedIn(response.data.isLoggedIn);
            setUser(response.data.user);
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
            setIsLoggedIn(false);
        });
  }, []);
  
  return <>
        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          {isLoggedIn === null && user && (
            <a className="nav-link" href="#">Chargement...</a>
          )}
          {isLoggedIn === false && (
            <a className="navbar-brand" href="/">LE MAS GUINOT</a>
          )}
          {isLoggedIn === true && user && (
            <a className="navbar-brand" href="/">Bienvenue {user.username}</a>
          )}
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
              {isLoggedIn === null && (
                <a className="nav-link" href="#">Chargement...</a>
              )}
              {isLoggedIn === false && (
                <a className="nav-link" href="/login">Connexion</a>
              )}
              {isLoggedIn === true && (
                <a className="nav-link" href="/logout">Déconnexion</a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </>
}
