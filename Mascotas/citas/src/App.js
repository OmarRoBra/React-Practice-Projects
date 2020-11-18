import React,{Fragment,useState,useEffect} from 'react';
import Form from './Components/Form'
import Lista from './Components/Lista'



function App() {

  let citasIniciales=JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[]
  }

  const [listas,guardarLista]=useState(citasIniciales)

  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(listas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  },[listas])

  //funcion que tome la cita actual y agregue la nueva
  const crearCita=cita=>{
    guardarLista([
      //siempre se tomar una copia del state
      //para que no se pierdan los datos ya guardados
      ...listas,
      cita
    ])
    console.log(cita)
  }

  //funcion paraeliminar citas en base al id 
  const eliminar=id=>{
    //con este filter sacamos al elemetno con el id
    //ya que nuestra condicion es que filtre a todos los que no tengan ese id y los
    //agregue a un nuevo arreglo
    const nuevasCitas = listas.filter(cita=>cita.id !==id);
    guardarLista(nuevasCitas)
    console.log(id)
  }

  //titulo condicional
  const titulo = listas.length===0?'No hay citas':'Administra tus citas';
  return (
    <Fragment>
      <h1>Administrador mascotas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form  crearCita={crearCita}/>

          </div>
          <div className="one-half column">
               <h2> {titulo}  </h2>
               {listas.map(lista =>(

                 <Lista 
                 key={lista.id}
                 lista={lista}
                 eliminar={eliminar} />
               ))}
          </div>

        </div>

      </div>
    </Fragment>
   


  );
}

export default App;
