import React from 'react';

const Resumen = ({cotizaciones}) => {

    if(Object.keys(cotizaciones).length===0) return null;

    return ( 
        <div>
           
    <p>El precio es: <span>{cotizaciones.PRICE}</span> </p>  
    <p>El precio mas alto del día : <span>{cotizaciones.HIGHDAY}</span> </p> 
    <p>El precio mas  bajo del día <span>{cotizaciones.LOWDAY}</span> </p> 
    <p>Variacion ultimas 24 horas: <span>{cotizaciones.CHANGEPCT24HOUR}</span> </p> 
    <p>Ultima Actualizacion: <span>{cotizaciones.LASTUPDATE}</span> </p> 
        </div>
     );
}
 
export default Resumen;