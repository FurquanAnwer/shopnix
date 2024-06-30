import React from 'react';
import Theme from './Pages/Theme';
import ProductDetails from './Pages/ProductDetails';
import ProductCategory from './Pages/ProductCategory';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import {Provider} from 'react-redux';
import store from './Store/store';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Theme/>} />
          <Route path="/productDetails" element={<ProductDetails/>} />
          <Route path="/ProductCategory" element={<ProductCategory/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
      </BrowserRouter> 
         
    </Provider>
  );
};

export default App;
