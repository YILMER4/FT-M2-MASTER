import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Counter extends Component {
  // Extra Credit
  incrementIfOdd = () => {
    //Implementar una función de incremento que sólo aumenta si el valor del contador 
    //es impar
    if(this.props.count%2 !==0){
      this.props.increment();
    }
  };
  // Extra Credit
  incrementAsync = () => {
    //  Implementar una función de incremento que aumenta después de esperar un segundo
    //1segundo = 1000
    setTimeout(this.props.increment, 1000)
  };

  render() {
    // Completa las funciones onClick de los botones
    // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en 
    //consecuencia
    return (
      <p>
        Clickeado: {this.props.count} veces
        <button
          onClick={this.props.increment}
        >
        </button>
        <button
          onClick={this.props.decrement}
        >
        </button>
        {/* Si quieres hacer los extra credit puede descomentar las líneas de abajo */}
        <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa después de un segundo
                </button> 
      </p>
    );
  }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.

const mapStateToProps = (state) => {// es una funcion que recibe  el estado la funcion
  //y retornar en forma de props  el estado del componente que necesitemos
  // ene ste caso estamos trayendo count porque es el unico que hay pero si hay mas de un elemento
  // se peude traer dicho elemento del estado inicial
  return {
    count: state.count,
  };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, { increment, decrement })(Counter);
// reemplaza al codiigo
// <Counter count ={state.getState().contador} increment ={store.dispatch(increment)}/>
//<Counter />
// esto se hace tanto en componentes funcionales como de clase