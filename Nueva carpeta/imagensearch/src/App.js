import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Imagenes from './components/Imagenes'

function App() {
  const [terminoBusqueda,saveTerminoB]=useState('')
  const [resultado,saveResultado]=useState([])
  const [paginaactual,savepa]=useState(1);
  const [paginatotal,guardarpaginatotal]=useState(1);

  useEffect(()=>{
    const consultarApi=async()=>{
      if(terminoBusqueda==="")return;
      console.log(terminoBusqueda)

      const url =`https://pixabay.com/api/?key=17907013-8dbf2063fc029f062f2dd23c6&q=${terminoBusqueda}&per_page=30&page=${paginaactual}`;
      const respuesta= await fetch(url);
      const resultado= await respuesta.json();
      console.log(resultado.hits)
      saveResultado(resultado.hits)
      const totapages= Math.ceil(resultado.totalHits/30);
      guardarpaginatotal(totapages);
      console.log(totapages)
    }
    consultarApi();
  },[terminoBusqueda,paginaactual])

  const paginaAnterior=()=>{
    const actual=paginaactual-1;
    if(actual===0){
      return;
    }
    savepa(actual);
  }
  
  const Nextpage=()=>{
    const newactual=paginaactual + 1;
    if(newactual>paginatotal){
      return;
    }
    savepa(newactual)
  }
  return ( 
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador Imagenes</p>
         <Formulario saveTerminoB={saveTerminoB}/>
      </div>
      <div className="row justify-content-center">
      <Imagenes resultado={resultado}/>
      {paginaactual!==1 ? <button 
     type="button"
     className="btn btn-info mr-1"
     onClick={paginaAnterior}>Anterior
       </button> :null}
    
         {paginaactual===paginatotal?null:<button 
     type="button"
     className="btn btn-info mr-1"
     onClick={Nextpage}>Siguiente
       </button>}
       
     
      </div>
    
   
    </div>
  );
}

export default App;
