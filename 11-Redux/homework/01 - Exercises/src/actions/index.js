const { INCREMENTO, DECREMENTO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer 
//recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).
// se reemplaza la palabra null por funciones
const incremento = (numero)=>{
  return{
    type: INCREMENTO,
    payload: numero,
  }};

const decremento = ()=>{
  return{
    type: DECREMENTO,
    payload : numero,

  }};

module.exports = {
  incremento,
  decremento
}