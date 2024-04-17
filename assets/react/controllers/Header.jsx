import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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

  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container>
        
        {isLoggedIn === null && (
          <Nav.Link href="#" className="nav-link">Chargement...</Nav.Link>
        )}
        {isLoggedIn === false && (
          <Navbar.Brand href="/">LE MAS GUINOT</Navbar.Brand>
        )}
        {isLoggedIn === true && (
          <Navbar.Brand href="/">Bienvenue { user.username }</Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>Accueil</Nav.Link>
            <Nav.Link href="/about" className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>A propos</Nav.Link>
            <Nav.Link href="/gite" className={`nav-link ${activeLink === '/gite' ? 'active' : ''}`}>Nos Gîtes</Nav.Link>
            <Nav.Link href="/tarifs" className={`nav-link ${activeLink === '/tarifs' ? 'active' : ''}`}>Tarifs</Nav.Link>
            <Nav.Link href="/contact" className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>
            {isLoggedIn === null && (
              <Nav.Link href="#" className="nav-link">Chargement...</Nav.Link>
            )}
            {isLoggedIn === false && (
              <Nav.Link href="/login" className="nav-link">Connexion</Nav.Link>
            )}
            {isLoggedIn === true && (
              <Nav.Link href="/logout" className="nav-link">Déconnexion</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
