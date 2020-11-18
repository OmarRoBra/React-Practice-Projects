import React,{Fragment,useState} from 'react';
import styled from '@emotion/styled'

const Laber=styled.label`
font-family:'Bebas Neue',cursive;
color: #FFF;
text-transform:uppercase;
font-weight:bold;
font-size:2.4rem;
margin-top:2rem;
display:block;

`;
const Select=styled.select`
  width:100%;
  display:block;
  padding:1rem;
  -webkit-appearance:none;
  border-radius:10px;
  border:none;
`

const useMoneda =(label,inical,opcion)=>{

    const [state,actualizarState]=useState(inical);
    const Seleccionar=()=>(
        <Fragment>
            <Laber>{label}</Laber>
            <Select
            onChange={e=>actualizarState(e.target.value)}
            value={state}
            >
            <option value=''>--Selecciona--</option>
                {opcion.map(opcion=>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>

    )

    return[state,Seleccionar,actualizarState];
}
export default useMoneda;