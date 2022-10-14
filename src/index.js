import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.headers.common['Accept'] = 'application/json'
root.render(
  
    <App />
);
