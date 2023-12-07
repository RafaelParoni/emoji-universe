import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Emojis from './pages/emojis/emoji';
import NavbarComponent from './components/Navbar/Navbar';
import FooterComponent from './components/Footer/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function setLanguage(){
 
  if(window.localStorage.getItem('lang') === null || window.localStorage.getItem('lang') === ''){
    if(window.navigator.language.includes('pt')){
      window.location = '/pt/'
      window.localStorage.setItem('lang', 'pt')
    }else if(window.navigator.language.includes('en')){
      window.location = '/en/'
      window.localStorage.setItem('lang', 'en')
    }else if(window.navigator.language.includes('es')){
      window.location = '/es/'
      window.localStorage.setItem('lang', 'es')
    }else{
      window.location = '/en/'
      window.localStorage.setItem('lang', 'en')
    }
  }else{
    if(!window.location.pathname.includes(window.localStorage.getItem('lang'))){
      window.location = '/' + window.localStorage.getItem('lang') + '/'
    }
  }

 
}
setLanguage()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavbarComponent/>
    <Routes>
      <Route path='*' element={ <Emojis/> }/>
    </Routes>
  <FooterComponent/>
</BrowserRouter>
);
