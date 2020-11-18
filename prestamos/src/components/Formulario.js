import React, {Fragment, useState} from 'react';
import{calcularTotal} from '../helpers'

const Formulario = (props) => {
  const   {cantidad,guardarCantidad,plazo,guardarPlazo,total,guardarTotal}=props;
     
       const [error,guardarError]=useState(false);
    
       const leerCantidad=(e)=>{
        console.log(e.target.value)
    }

    const calcularPrestamos=event=>{
        event.preventDefault();
       
        if(cantidad===0|| plazo===''){
           guardarError(true)
           return
        }

        guardarError(false)
          const total = calcularTotal(cantidad,plazo);
        guardarTotal(total);

    }


    return ( 
        <Fragment>
        <form onSubmit={calcularPrestamos}>

        <div className="row">
            <div>
                <label>Cantidad Prestamo</label>
                <input 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Ejemplo: 3000" 
                    onChange={e=>guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Plazo para Pagar</label>
                <select 
                    className="u-full-width"
                    onChange={e=>guardarPlazo(parseInt(e.target.value))}
                >
                    <option value="">Seleccionar</option>
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                </select>
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Calcular" 
                    className="button-primary u-full-width" 
                />
            </div>
        </div>
</form>

{(error) ? <p className="error">:c</p>:''}
</Fragment>
     );
}
 
export default Formulario;