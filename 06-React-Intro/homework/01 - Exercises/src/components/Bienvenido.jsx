import React from "react";
import Botones from "./Botones.jsx";

const studentName = "Yilmer";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
  <div>
    <h1>Hola mundo</h1>
    <h3>{studentName}</h3>
    <ul>
      {techSkills.map(skill =>(
      <li>{skill}</li> 
      ))};
    </ul>
  </div>);
    
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
