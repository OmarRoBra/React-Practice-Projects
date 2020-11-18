import React from 'react';
import  Imagen from './imagen'

const Imagenes = ({resultado}) => {
    return (  <div className="col-12 p-5 row">
   {resultado.map(op=>(
      <Imagen  key={op.id} resultado={op}/>
   ))}
    </div>);
}
 
export default Imagenes;