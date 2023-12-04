import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Emojis from './pages/emojis/emoji';
import NavbarComponent from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavbarComponent/>
    <Routes>
      <Route path='*' element={ <Emojis/> }/>
    </Routes>
</BrowserRouter>
);
