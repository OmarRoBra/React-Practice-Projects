import React,{Fragment,useState}from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({crearCita}) => {

const [cita,guardarcita]=useState({
    mascota:'',
    dueño:'',
    fecha:'',
    hora:'',
    sintomas:''
})
const[mistake,saveMistake]=useState(false)

const {mascota,dueño,hora,fecha,sintomas}=cita;
const actualizarState=e=>{
 guardarcita({
  ...cita,
   [e.target.name]:e.target.value
 })
}

const sumbitCita=e=>{
  e.preventDefault();
  //validar formulario .trim() hace que los espacios en blanco se eliminen
  if(dueño.trim()===''|| mascota.trim()===''|| hora.trim()===''|| fecha.trim()===''
  ||sintomas.trim()===''){
    saveMistake(true)
     return;
  }
   saveMistake(false);

   cita.id=uuidv4();
  //crear cita

  crearCita(cita)

 guardarcita({
  mascota:'',
  dueño:'',
  fecha:'',
  hora:'',
  sintomas:''
 })

}



return (  
<Fragment>
  {mistake ?  <p className='alerta-error'>Campos vacios</p> :null}
  <h2>Formulario</h2>
  <form onSubmit={sumbitCita}>
    <label>Mascota</label>
    <input 
      type="text"
      name="mascota"
      className="u-full-width"
      placeholder="mascota"
      onChange={actualizarState}
      value={mascota}
    />
    
    <label>Nombre del dueño</label>
    <input 
      type="text"
      name="dueño"
      className="u-full-width"
      placeholder="dueño"
      onChange={actualizarState}
      value={dueño}
    />
    <label>Fecha</label>
     <input 
      type="date"
      name="fecha"
      className="u-full-width"
      placeholder="mm/dd/yyy"
      onChange={actualizarState}
      value={fecha}
    />
    <label>Hora</label>
     <input 
      type="time"
      name="hora"
      className="u-full-width"
      onChange={actualizarState}
      value={hora}
    />
    <label>Sintomas</label>
     <textarea 
     className="u-full-width"
     name="sintomas"
     onChange={actualizarState}
     value={sintomas}>
      
         

     </textarea>
     <button type="submit"
     className="    button-primary">
         Enviar
     </button>
</form>
    </Fragment>
      );
}
 
export default Form;