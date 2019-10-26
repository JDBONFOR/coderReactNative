import React from 'react';
import logo from './logo.svg';
import './App.css';

import TitleComponents from './components/title';
import ListComponent from './components/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <ol>
          <li>¿Qué es y para qué sirve create-react-app?</li>
          <p> Corresponde al metodo de terminal propia de React para crear la App y que armé la estructura inicial del proyecto </p>
        </ol>
      </div>
      <div className="container">
        <TitleComponents />
        <ListComponent />
      </div>
    </div>
  );
}

export default App;
