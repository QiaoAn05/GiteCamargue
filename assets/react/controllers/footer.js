import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './Footer.jsx';

const container = document.getElementById('footer');
const root = createRoot(container);
root.render(<Footer />);
