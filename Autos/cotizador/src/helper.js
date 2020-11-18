export function obtenerDiferencia(year){
    return  new Date().getFullYear() - year
}

//retorna el incremento del presupeusto segun la marca 

export function  Marca(marca){
    let incremento;

    switch(marca){
        case 'europeo':
            incremento=1.30;
            break;
        case 'americano':
            incremento=1.15;
            break;
        case 'asiatico':
            incremento=1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function planSeguro(plan){
    return(plan==='basico')?1.20 :1.50;

}