
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Grab the root element from the DOM
const rootElement = document.getElementById('root');

// Use createRoot to render the App
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);