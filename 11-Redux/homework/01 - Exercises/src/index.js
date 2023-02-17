const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
//cambiamos var por const
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
//cambiamos var por const
// se enlaca con la propiedad id de la etiqueta span del archivop index.html
const valor =document.getElementById("valor"); 

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const estadoActual = store.getState().contador;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  // seteamos el estado (como si dijeramos setState)
  // en valor tenemos capturado nuestro span y le inyectamos el  estadoActual
  valor.innerHTML = estadoActual;
}

/*
type store{ // esto tiene nuestra store
  dispatch: Dispatch
  getState: ()=>State
  suscribe: (Listener: ()=>void) => ()=>void
  replaceReducer: (reducer:reducer) => void
}

*/


// Ejecutamos la función 'renderContador':
  renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción,
//ejecutamos la función:

store.subscribe(renderContador);

  /*store.subscribe(()=>{
    console.log("suscription: ", store.getState());
  });*/

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
//el # significa que es un id
// document.querySelector("#incremento").addEventListener("click", ()=>{
//   store.dispatch(incremento())
// })


let suma = document.querySelector("#incremento");

suma.onclick= ()=>store.dispatch(incremento(1));



// tambien se puede con getElementByI 
// document.querySelector("#decremento").addEventListener("click", ()=>{
//   store.dispatch(decremento())
// })

let resta = document.querySelector("#decremento")
resta.onclick= ()=>store.dispatch(decremento(1));
