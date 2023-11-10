import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss'
import Header from './components/UI/Header/Header';
import Player from './components/UI/Player/Player';
import AppRouter from './components/AppRouter';
import Sidebar from './components/UI/Sidebar/Sidebar';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className='app__holder'>
          <Sidebar/>
          <div>

            <AppRouter/>
            
            <Footer/>
          </div>
        </div>
        <Player/>
      </BrowserRouter>
    </div>
  );
}

export default App;
