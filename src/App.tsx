import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
