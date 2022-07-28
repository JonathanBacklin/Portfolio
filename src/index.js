import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import "./root.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);
