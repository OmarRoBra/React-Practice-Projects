import React,{useState,useEffect,Fragment} from 'react';
import styled from '@emotion/styled'
import imag from  '../src/cryptomonedas.png'
import Formulario from './Components/Formulario'
import axios from 'axios'
import Resumen from './Components/resumen'

const Contenedor = styled.div`
max-width:900px;
margin:0 auto;

@media(min-width:992px){
  display:grid;
  grid-template-columns:repeat(2,1fr);
  column-gap:2rem;
   
}
`
const Imagen= styled.img`
max-width:100%;
margin-top:5rem;
`
const Heading=styled.h1`
font-family:'Bebas Neue',cursive;
color:#FFFF;
text-align:left;
font-weight:700;
font-size:50px;
margin-bottom:50px;
margin-top:80px;
/*Esto crea un desbordamiento justo abajo del div */
&::after{
  content:'';
  width:100px;
  height:6px;
  background-color:#66A2FE;
  display:block;
}
`

function App() {
  const [moneda,guardarMoneda]=useState('')
  const [criptoMoneda,guardarCripto]=useState('')
  const[cotizada,guardarcotizada]=useState({})

  useEffect(()=>{
       if(moneda==='') return;


       const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
       const APIconsult=async()=>{
        const cotizacion= await axios.get(url);
        guardarcotizada(cotizacion.data.DISPLAY[criptoMoneda][moneda])
        console.log(cotizacion.data.DISPLAY[criptoMoneda][moneda])
       }
       APIconsult();
  },[moneda,criptoMoneda])
 
  return (
 <Fragment>
    <Contenedor>
      <div>
          <Imagen src={imag}
          alt="imagen-cripto"
          />

      </div>
      <div>
        <Heading>Cotiza CriptoMonedas</Heading>
        <Formulario
        guardarCripto={guardarCripto}
        guardarMoneda={guardarMoneda}
        />
      </div>
      <div>
      <Resumen cotizaciones={cotizada} />
      </div>
    </Contenedor>

    
    </Fragment>
  );
}

export default App;
