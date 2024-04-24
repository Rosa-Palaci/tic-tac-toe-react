import React from "react";
import { useState } from "react";
function Hello(){
    return <p>Hello Rosie</p>
}

 function Hello3(){
    return(
        <> 
            <Hello />
            <Hello />
            <Hello />
        </>
        
    ) 
}

export default function Boton(){
    const [count, setCount] = useState(0); /*Importar y usar useState inicializando en 0 */
    /*Llama el valor del count */
    function aumentaCuenta(){
        setCount(count + 1);/*El valor es llamado cada vez que se clickea */
    }
    return(
        <button onClick={aumentaCuenta}>
            Clicked {count} times
        </button> /*Renderiza el boton */
    )
};