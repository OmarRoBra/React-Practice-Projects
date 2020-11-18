import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Boton= styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size:300px;
font-family:'Arial',Arial, Helvetica, sans-serif;
color: #ffffff;
margin-top:3rem;
padding:1rem 3rem;
font-size:2rem;
border:2px solid black;
`
const Contenedor=styled.div`
display:flex;
align-items:center;
padding-top:5rem;
flex-direction:column; 
`


function App() {

  //state  frase 
  const [frase,obtenerFrase]=useState({})
  const consultaApi=async ()=>{
    const resultado = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const fraseApi = await resultado.json()
    obtenerFrase(fraseApi[0 ])
    }

  useEffect(()=>{
          consultaApi();
    },[])

  return (
    <Contenedor
    onClick={consultaApi}
    >
        <Frase frase={frase} />
        <Boton>Obtener frase</Boton>
        
    </Contenedor>
    
  );
}

export default App;
