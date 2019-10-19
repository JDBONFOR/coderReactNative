var React = require('react')
var Component = React.Component


// El valor de PI nunca debería cambiar
var PI = 3.141592
const PI = 3.141592 

var acumulador = 0
if (true) {
  acumulador = acumulador + 10
}
// Arrow function
true ? acumulador = acumulador + 10 : acumulador;

function sumar(a, b) {
  return a + b
}
// Arrow function
const sumar = (a,b) => (a + b) ;


function sumar(a, b) {
  a = a === undefined ? 1 : a
  b = b === undefined ? 2 : b
  return a + b
}
// Arrow function
const sumar = (a,b) => {
    a = a === undefined ? 1 : a
    b = b === undefined ? 2 : b
    return a + b;
}

function procrear(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad
  }
}
// Arrow function - Si el nombre del retorn es igual al que vino, no lo pongo doble.
const procrear = (nombre, edad) => ({ nombre, edad })


var hijo = {
    nombre: 'Juan',
    edad: 30,
    padre: {
      nombre: 'Pedro',
      edad: 90,
    },
  }
  
var nombre = hijo.nombre
var edad = hijo.padre.edad
var nombre = 'Juan'
var apellido = 'Perez'
var edad = 40

// Notar como se mezclan el operador + de strings con el + de números cuando hacemos (50 - edad)
console.log('El señor' + nombre + ' ' + apellido + ' va a cumplir 50 dentro de ' + (50 - edad) + ' años')
console.log(`El señor ${nombre} ${apellido} va a cumplir dentro de `+ (50-edad) +` años`)


function resultadoRandom(callback) {
    if (Math.random() > 0.5) {
      callback(new Error('Mala suerte'))
    } else {
      callback(null, 'Buena suerte')
    }
  }
resultadoRandom(function(error, resultado) {
    if (error) {
      console.error(error)
    } else {
      console.log('Resultado: ', resultado)
    }
  })


const resultadoRandom = () =>
    new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            reject(new Error('Mala suerte'))
        } else {
            resolve(null, 'Buena suerte')
        }
    })
resultadoRandom()
    .then(resultado => console.log("Resultado", resultado))
    .catch(error => console.log(error));