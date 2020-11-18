import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Erro from './Erro'
import axios from 'axios'
//Agregar estilos al inpud de boton
const Boton =styled.input`
 margin-top:20px;
 font-weight:bold;
 font-size:20px;
 padding:10px;
 background-color:#66a2fe;
 border:none;
 width:100%;
 border:none;
 width:100%;
 border-radius:10px;
 color: #FFF;
 transition: background-color .3s ease;

 &:hover{
     background-color:#326AC0;
     cursor:pointer
 }
`

const Formulario = ({guardarMoneda,guardarCripto}) => {
    //state para las opciones de las bitcoin sacadas de  la API
    const [criptocoin,saveCripto]=useState([])
    const [error,saveError]=useState(false)

    const MONEDAS=[ 
        {codigo:'USD',nombre:'Dolar'},
        {codigo:'MXN',nombre:'Peso'},
        {codigo:'EUR',nombre:'EURO'},
        {codigo:'GBP',nombre:'Libra estarlina'}
        

    ]
    //State usado para el hook de criptmonedas donde se pasa el valor del label, el valor inical y el arreglo
    //de las bitcoins que contiene todas las opciones para el select
    const [cripto,SelectCripto,]=useCriptomoneda('Elige tu Cripto Moneda','',criptocoin)
   //State usado para eñ hook de monedas
    const [moneda,Monedafunction]=useMoneda('Elige tu moneda','',MONEDAS);
   //Obtiene los resultados de la API usando Axios obteniendo las 10 monedas mas importantes
    useEffect(()=>{
          const ApiConsult= async ()=>{
              
            const url = await  axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            saveCripto(url.data.Data) 
            console.log(url.data.Data) 

        }
          ApiConsult();
    },[])

    const cotizarMoneda=e=>{
            e.preventDefault();

            if(cripto.trim()==='' || moneda.trim()===''){
                saveError(true);
                return
            }
            saveError(false)
            guardarCripto(cripto);
            guardarMoneda(moneda);
    }

    return ( 
        
        <form onSubmit={cotizarMoneda}>
            {error ? <Erro mensaje="Ambos campos son obligatorios" /> :null}
            <Monedafunction/> 
            <SelectCripto/>
            <Boton 
            type="submit"
            value="Calcular"
            />

        </form>
    );
}
 
export default Formulario;