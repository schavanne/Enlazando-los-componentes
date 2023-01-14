import React from 'react';
import imagenFondo from '../assets/images/error404.jpg';

function errorPagina(){
    return(
        <div>
            <img src={imagenFondo} className="w-100"/>
        </div>
    )
}

export default errorPagina;
