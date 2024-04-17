import React from 'react';
import { createRoot } from 'react-dom/client';
import GiteNotConnected from './GiteNotConnected.jsx';

const container = document.getElementById('giteNotConnected');

if(container) {
    const root = createRoot(container);
    root.render(<GiteNotConnected />);
}