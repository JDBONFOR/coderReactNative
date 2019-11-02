## Challenge 4 del curso de Desarrollo Móvil de Coderhouse

Para poder resolver este challenge seguir los siguientes pasos

1. Hacer un **fork** este repositorio
1. Una vez hecho el **fork**, hacer un clon copiando la URL (en el botón verde) y corriendo `git clone <URL>` en la consola
1. Una vez clonado, moverse dentro de la carpeta del proyecto y correr `npm install` (o `yarn`) para instalar las dependencias necesarias
1. Hacer un **nuevo branch** con tu nombre y apellido para identificarte (ej. `git checkout -b gonzalo-aguirre`)
1. Correr el proyecto usando `expo start`
1. Resolver el enunciado, **haciendo un nuevo commit al resolver cada parte**
1. Hacer un **push** del nuevo branch
1. Desde **github.com** crear un nuevo **pull request** desde ese branch hacia master

### Enunciado

Todos los cambios necesarios deben hacerse sobre el archivo `Tarjeta.js`

#### Estilos múltiples

Crear un **nuevo estilo** dentro del `StyleSheet` ya existente que se llame `conSombra` con los siguientes valores

```js
{
  shadowColor: 'black',
  shadowOffset: {
    height: 1,
    width: 1,
  },
  shadowRadius: 1.5,
  shadowOpacity: 0.5,
  elevation: 2,
  padding: 10,
}
```

Aplicar ese estilo a la `<View>` principal sin perder los estilos de `container`.

#### Estilos condicionales

Crear un **nuevo estilo** dentro del `StyleSheet` ya existente que se llame `textoChico` y que se aplique al `<Text>` en caso de que se estén mostrando tanto el nombre como el apellido.

Este estilo debe aplicarse de manera que no se pierdan los estilos ya definidos en `texto`.

#### Estilos via props

Agregar una prop `style` al componente de `Tarjeta.js`. Ese estilo deberá ser aplicado a nuestro elemento contenedor, siempre manteniendo el estilo ya aplicado.

Modificar el archivo `App.js` haciendo que muestre dos tarjetas en vez de una y pasando un estilo que aplique un margen de 10 a las tarjetas.
