import React from 'react';

const Resultado = ({total,plazo,cantidad}) => {
    return ( <div className="u-full-width resultado">
        <h2>Resumen</h2>
<p>Prestamo solicitado:  ${cantidad}</p>
<p>A un plazo de : {plazo}</p>
<p>Su pago mensual: {total/plazo}</p>
<p>Da un total a pagar de : {total}</p>
    </div> );
}
 
export default Resultado;