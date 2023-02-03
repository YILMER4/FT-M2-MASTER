import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   // se crea un estado 
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals: []
   })

   const handleInputChange = (evento) => {
      setZoo({
         ...zoo,
         zooName: evento.target.value,
      });
   };

   const handleSpecies = (e) =>{
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter( (animal) =>
            animal.specie === e.target.value),
      });
   };

   const handleAllSpecies = (e) => {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals,
      });
   };

   React.useEffect(() =>{
      fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));

   }, []);// ARREGLO DE DEPENDENCIAS


   return (
      <div>
         <label>Zoo Name:</label>
         <input onChange={handleInputChange} value={zoo.zooName}/>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} 
         handleSpecies={handleSpecies} 
         handleAllSpecies={handleAllSpecies} />
         <Animals animals={zoo.animals} />
      </div>
   );
}
   