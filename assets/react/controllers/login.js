import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login.jsx';

const container = document.getElementById('login');

if(container) {
    const root = createRoot(container);
    root.render(<Login />);
}