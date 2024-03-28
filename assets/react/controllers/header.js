import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header.jsx';

const container = document.getElementById('header');
const root = createRoot(container);
root.render(<Header />);
