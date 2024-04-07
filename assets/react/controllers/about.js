import React from 'react';
import { createRoot } from 'react-dom/client';
import About from './About.jsx';

const container = document.getElementById('about');

if(container) {
    const root = createRoot(container);
    root.render(<About />);
}

// aide trouvé avec chat gpt
// // Sélectionnez l'élément DOM avec l'ID "gite"
// const container = document.getElementById('gite');

// // Vérifiez si l'élément existe avant de le passer à createRoot()
// if (container) {
//     // Créez un root React dans l'élément DOM sélectionné
//     const root = createRoot(container);
    
//     // Rendez votre composant React dans ce root
//     root.render(<Gite />);
// } else {
//     console.error("L'élément avec l'ID 'gite' n'existe pas.");
// }
