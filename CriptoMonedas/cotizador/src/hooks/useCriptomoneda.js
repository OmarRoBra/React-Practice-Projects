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

const useCriptomoneda =(label,inical,opcion)=>{
    

    const [state,actualizarState]=useState(inical);
    const SeleccionarCripto=()=>(
        <Fragment>
            <Laber>{label}</Laber>
            <Select
            onChange={e=>actualizarState(e.target.value)}
            value={state}
            >
            <option value=''>--Selecciona--</option>
            {opcion.map(opcion=>(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>

    )

    return[state,SeleccionarCripto,actualizarState];
}
export default useCriptomoneda;