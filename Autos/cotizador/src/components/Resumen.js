import React from 'react';
import styled from '@emotion/styled';

const ContenedorResumen= styled.div`
padding:1rem;
text-align:center;
background-color:#00838F;
color:#FFF;
margin-top:1rem;
`

const Resumen = ({datos}) => {
    const {marca,year,plan}=datos;
    return ( 

        <ContenedorResumen>
            <h2>Cotizador</h2>
            <ul>
    <li>Marca: {marca}</li>
             <li>Año del auto: {year} </li>
             <li>Plan seleccionado: {plan} </li> 
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;