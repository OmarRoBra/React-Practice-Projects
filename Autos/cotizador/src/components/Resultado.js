import React from 'react';
import styled from '@emotion/styled'

const ResultadoCotizacion=styled.p`
background-color:rgb(127,224,237);
margin-top:2rem;
padding:1rem;
text-align:center;
`

const Resultado = ({cotizacion}) =>{
    
return ( 
(cotizacion===0)
?<ResultadoCotizacion>Elige para  obtener Resultado</ResultadoCotizacion>
: <p>{cotizacion}</p>

)
}
export default Resultado;