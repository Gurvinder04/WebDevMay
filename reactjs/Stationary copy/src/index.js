import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { UserContext } from './App.js';
import './Style/stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CartProvider } from './Context/CartContext.js';
import { FilterContextProvider } from './Context/FilterContext.js';
import { AppProvider } from './Context/ProductContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <AppProvider>
     <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
     </FilterContextProvider>
    </AppProvider>
    
</React.StrictMode>
);

