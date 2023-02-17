const { INCREMENTO, DECREMENTO } = require('../action-types');

//TAMBIEN SE LE LLAMA ESTADO GLOBAL Y SOLAMENTE HABRA UN SOLO ESTADO
const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  //PUEDEN HABER VARIOS REDUCER
  switch (action.type) {
    case INCREMENTO:
        return{
        contador: state.contador+1
    }
    case DECREMENTO:
        return{
        contador: state.contador-1
    }
    /* return initialState-1;
    case "incrementoImpar":
      return initialState+2;
    case "incrementoAsync":
      return initialState;*/
    default:
      return state;
  }
  
}

module.exports = contador;