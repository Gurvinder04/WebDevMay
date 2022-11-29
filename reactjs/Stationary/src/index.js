import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
  <App />
  </CartProvider>
</React.StrictMode>
);

