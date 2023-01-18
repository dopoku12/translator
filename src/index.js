import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styleSheet/index.css'
import 'materialize-css/dist/css/materialize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

