import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Saludo from './components/saludo/saludo'

function App() {

  const [value, setHidden] = useState(false);
  const [Nombre, setValue] = useState("");


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>


      <div>
        <p>1.- Hacer un componente SALUDO, que tenga una propiedad Nombre y que se muestre en pantalla</p>
        <p>2.- Agregar un botón que oculte que permita ocultar el componente Saludo</p>
        <p>3.- En el componente Saludo, hacer que pasados 3 segundos muestre en el title de la WEB el mismo Saludo</p>
        <p>4.- Agregar un input que permita modificar el nombre de la persona a saludar.</p>
      </div>


      { !value && ( 
        <Saludo 
          Nombre = { Nombre }
        />
        )
      }

      <div 
        className = "textCenter title"      
      >
        <input
          onChange = { (e) => { setValue(e.target.value) }}
        >
        </input>
        <button 
            onClick = { () => { setHidden(true) }}
        >
          Ocultar 
        </button>
      </div> 

    </div>
  );
}

export default App;
