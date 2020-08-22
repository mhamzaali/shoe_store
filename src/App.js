import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Header} from './Components/Header';
import {Home} from './Components/Home';
import {Products} from './Components/Products'
import { ProductsDetail } from './Components/ProductsDetail';
import {NotFound} from './Components/NotFound'
import About from './Components/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Products/:ProductID" element={<ProductsDetail/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
