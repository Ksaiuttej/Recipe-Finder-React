import React from 'react';
import Home from './Home';
import Header from './Header'
import Hero from './Hero';
import Cards from './Cards';
import Tips from './Tips';
import Banner from './Banner';
import Footer from './Footer';
import Random from './Random';
import Search from './Search';
import ItemDetail from './ItemDetail';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Tips />} />
          <Route path="/random" element={<Random />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item-detail" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
