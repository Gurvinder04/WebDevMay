import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext';
import { FilterContextProvider } from './Context/FilterContext';
import { AppProvider } from './Context/ProductContext';

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

