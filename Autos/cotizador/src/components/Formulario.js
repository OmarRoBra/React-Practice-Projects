import React,{useState} from 'react';
import styled from '@emotion/styled'
import {obtenerDiferencia,Marca,planSeguro} from '../helper'

//////////////////////////  STYLED CSS /////////////////////////////////
const Campo =   styled.div `
display:flex;
margin-bottom:1rem;
align-items:center;
`
const Label =styled.label`
 flex:0 0 100px;
`
const Select = styled.select`
display: block;
width:100% ;
padding:1rem;
border:1px solid #e1e1e1;
-webkit-appearance:none;
`

const InputRadio=styled.input`
margin: 0 1rem;
`
const Boton=styled.button`
background-color:#00838F;
font-size:16px;
width:100%;
padding:1rem;
color: #ffffff;
text-transform:uppercase;
font-weight:bold;
border:none;

/*Esta es una función en sass que pone el evento despeusde un amperson
cuando esta el hover el cursor cambia de forma */

&:hover{
    background-color:#26C6DA;
    cursor:pointer
}
`
const ErrorMsg=styled.div`
background-color:red;
color:white;
padding:1rem;
width:100%;
text-align:center;
margin-bottom:2rem;
`


/////////////////////////////////////////////////////////////////////////////////
const Formulario = ({guardarResumen}) => {
 const[datos,guardarDatos]=useState({
     marca:'',
     year:'',
     plan:''
 })
const[error,guardarError]=useState(false)
 const {marca,year,plan}=datos;
 const obtenerDatos=e=>{
  guardarDatos({
      ...datos,
      [e.target.name]:e.target.value
  })

}

const cotizarSeguro=e=>{
    e.preventDefault();
    if(marca.trim()===''|| year.trim()===''|| plan.trim()===''){
        guardarError(true);
        setTimeout(()=>{
            guardarError(false)
        },3000)

        return
    }
    guardarError(false)
    ///precio base en el que se restaron los precios segun los años
    let resultado=2000;
     
    //obtener diferencia de años
    const diferencia= obtenerDiferencia(year)

    resultado-=((diferencia*3)*resultado/1000)

    resultado=Marca(marca) * resultado;
    resultado=parseFloat(planSeguro(plan) * resultado).toFixed(2);
    console.log(resultado)
    guardarResumen({
        cotizacion:resultado,
        datos:{
            marca,
            year,
            plan
        }
    })
}


    return (  

    <form
    onSubmit={cotizarSeguro}
    >
        {error? <ErrorMsg>Hay un error</ErrorMsg>: null}
        <Campo>
            <Label>Marca</Label>
            <Select
            
            name="marca"
            value={marca}
            onChange={obtenerDatos}>
                <option value="">--Selecciona--</option>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Año</Label>
            <Select
            name="year"
            value={year}
            onChange={obtenerDatos}
            >
            <option value="">-- Seleccione --</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2017">2017</option>
               <option value="2016">2016</option>
               <option value="2015">2015</option>
               <option value="2014">2014</option>
               <option value="2013">2013</option>
               <option value="2012">2012</option>
            </Select>
        </Campo>
          <Campo>
          <Label>Plan : </Label>
        <InputRadio type="radio" name="plan" value="basico" checked={plan==="basico"} onChange={obtenerDatos} />Básico
        <InputRadio type="radio" name="plan" value="completo" checked={plan==="completo"}  onChange={obtenerDatos}/>Completa
          </Campo>
        
        <Boton type="submit">Cotizar</Boton>
    </form>);
}
 
export default Formulario;