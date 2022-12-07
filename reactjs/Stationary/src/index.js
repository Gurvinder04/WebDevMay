import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './Style/stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext.js';
import { FilterContextProvider } from './Context/FilterContext.js';
import { AppProvider } from './Context/ProductContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
     <CartProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
     </CartProvider>
    </AppProvider>
</React.StrictMode>
);

