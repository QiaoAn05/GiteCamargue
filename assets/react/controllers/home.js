import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home.jsx';

const container = document.getElementById('home');
const root = createRoot(container);
root.render(<Home tab="home" />);