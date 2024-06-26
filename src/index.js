import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';

/**
 * The root element for rendering React components.
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);