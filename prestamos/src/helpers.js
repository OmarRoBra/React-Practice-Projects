export function calcularTotal(cantidad,plazo){
    let totalCantidad

    if(cantidad<=1000){
        totalCantidad=cantidad*.25;
    }
    else if(cantidad>1000 && cantidad<=500){
        totalCantidad=cantidad* 0.20;

    }else if(cantidad>5000 && cantidad<=10000){
        totalCantidad=cantidad*0.15;

    }else{
        totalCantidad= cantidad*0.15;
    }
    let totalPlazo;


    switch(plazo){
        case 3:
            totalPlazo= cantidad *0.05;
            break;
        
            case 6:
                totalPlazo= cantidad * 0.1;
              break;  
        case 12:
            totalPlazo= cantidad *0.15;
            break;
        case 24:
            totalPlazo=cantidad * 0.20
             break;
    }

    return totalPlazo + totalCantidad + cantidad;
}
