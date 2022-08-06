import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes';
import { ToastContainer } from 'react-toastify';
import { store } from 'state/store'
import { Provider } from 'react-redux'
import bootstrap from 'bootstrap';
import 'assets/css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

bootstrap();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <AppRoutes />
    <ToastContainer />
  </Provider>
);
