import React, { useEffect } from 'react';

const Saludo = ({ Nombre }) => {

    useEffect( () => {
        const timer = setTimeout(() => {
            document.title = `Hola ${ Nombre }`
        }, 300);
        return () => clearTimeout(timer);
    }, [ Nombre ])
    

    return (
        <div 
            className = "textCenter title"
        > Hola { Nombre } </div>
    )
}

export default Saludo;