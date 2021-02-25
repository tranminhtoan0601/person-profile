import React from 'react';
// import './App.css';
import About from './feature/About';
import Footer from './feature/Footer';
import Header from './feature/Header';
import Hireme from './feature/Hireme';
import Home from './feature/Home';
import Protflio from './feature/Protflio';
import Service from './feature/Service';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <About/>
     <Service/>
     <Protflio/>
     <Hireme/>
     <Footer/>
    </div>
  );
}

export default App;
