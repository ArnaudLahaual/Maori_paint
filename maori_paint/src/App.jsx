import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Main from './Main/main';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Main />
        <Main />
        <Main />
        <Main />
    
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
