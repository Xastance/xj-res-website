import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

import Footer from './components/Footer';
import Header from './components/Header';

import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <div className="Header fixed-top">
          <Header />
        </div>
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
