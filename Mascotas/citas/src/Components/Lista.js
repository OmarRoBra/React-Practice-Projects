import React from 'react';
const Lista = ({lista,eliminar}) => {
return (
    <div className="cita">
        <p>Mascota: <span>{lista.mascota}</span></p>
        <p>Dueño: <span>{lista.dueño}</span></p>
        <p>Hora: <span>{lista.hora}</span></p>
        <p>Fecha: <span>{lista.fecha}</span></p>
        <p>Sintomas: <span>{lista.sintomas}</span></p>
        <button className='button eliminar'
        onClick={()=>eliminar(lista.id)}>Eliminar</button>


    </div>
);
}
 
export default Lista;