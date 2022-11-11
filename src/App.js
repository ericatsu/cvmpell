import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import { useState } from 'react';
import SideBar from '../src/pages/SideBar';
import NavBar from '../src/pages/NavBar';

import Footer from '../src/pages/Footer';
import ShopPage from './ecommerce/shop/ShopPage';
import BlogPage from './pages/BlogPage';
import PartnerPage from './pages/PartnerPage';



function App() {
 const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/AboutUs" element={<AboutUs/>} />
          <Route exact path="/ShopPage" element={<ShopPage/>} />
          <Route exact path="/PartnerPage" element={<PartnerPage/>} />
          <Route exact path="/BlogPage" element={<BlogPage/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
