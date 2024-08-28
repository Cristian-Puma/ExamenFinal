import React from 'react';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
