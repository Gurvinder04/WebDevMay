import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './Style/stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CartProvider } from './Context/CartContext.js';
import { FilterContextProvider } from './Context/FilterContext.js';
import { AppProvider } from './Context/ProductContext.js';
import { AuthProvider } from './Context/AuthContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider>
    <AppProvider>
     <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
     </FilterContextProvider>
    </AppProvider>
    </AuthProvider>
    
    
</React.StrictMode>
);

