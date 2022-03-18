let name = prompt("cual es tu nombre y apellido?")
//obteniendo iniciales
let firstInitial = name.slice(0,1);
//buscando posicion del apellido
let secondInitialPosition = name.indexOf(" ") +1;
//obteniendo segunda inicial
let secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);

// console.log(firstInitial+secondInitial);
//mostrando en la web
document.write(`Las iniciales de tu nombre y apellido son ${firstInitial.toUpperCase()}${secondInitial.toUpperCase()}`);


const restaurantBill = (50) => {
    const tax = (50*0.1)

    /* ??? */
  
    return /* ??? */
  };