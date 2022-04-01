import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { DataProvider } from './Context/Context';
import './index.css';
//import {DataContext} from "../Context/Context"

import Product from './Components/Product';
import Products from './Components/Products';

import Cart from './Routes/Cart';
import Contact from './Routes/Contact';
import Index from './Routes/Index';


ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Index/>}/>
            <Route path='/Products' element={<Products/>}></Route>
            <Route path='/Product/:id' element={<Product/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

