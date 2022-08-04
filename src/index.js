import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/css/index.css';
// import Login from 'views/login';
import Register from 'views/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
