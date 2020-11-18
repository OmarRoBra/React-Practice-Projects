import React,{useState} from 'react';
import  Error from './Error'
const Formulario = ({saveTerminoB}) => {

   const [termino,guardarTermino]=useState('');
   const [error,saveError]=useState(false);
   const checkSubmit=(e)=>{
       e.preventDefault()
       if(termino.trim()===''){
          saveError(true);
          return;
       }
       saveError(false)
       saveTerminoB(termino)
   }
    return (<form
    
        onSubmit={checkSubmit}>
            {error? <Error mensaje="Un valor debe ser ingresado"/>:null } 
        <div className="row">

            <div className="form-group col-md-8">
                <input
                   type="text"
                   className="form-control form-control-lg"
                   placeholder="Busca Imagenes"
                   onChange={e=>guardarTermino(e.target.value)}
                 />
            </div>
            
            <div className="form-group col-md-4">
                <input
                   type="submit"
                   className="btn btn-lg btn-danger btn-block"
                   placeholder="Busca Imagenes"
                   
                 />
            </div>
        </div>
    </form>  );
}
 
export default Formulario;