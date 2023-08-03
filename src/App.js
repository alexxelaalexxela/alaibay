// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import MemberSpacePage from './pages/MemberSpacePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';

import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         
        <Route exact path="/" element={<HomePage />} />
        <Route path="/information" element={<InformationPage/>} />
        <Route path="/memberspace" element={<MemberSpacePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>


    </Router>
  );
};

export default App;
