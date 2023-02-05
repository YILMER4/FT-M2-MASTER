import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate (inputs){
  let errors= {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';}
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';}
  if (inputs.phone < 0) { 
    errors.phone = 'Sólo números positivos';}
  if (!inputs.subject) {
    errors.subject = 'Se requiere un asunto';}
  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje';}
  
    return errors;
}

export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = React.useState({
    //aun sin darle funcionalidad lo haresmos en el siguiente paso 
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  

  const handleChange = (e)=>{
    //e.target es el elemento que ejecuto el evento
    //name identifica el input y value describe el valor actual
    setInputs({
      ...inputs,[e.target.name]: e.target.value });
    
    setErrors(
      validate({
          ...inputs,
          [e.target.name]: e.target.value,
      })
    );
  }

  // funcionalidad del boton enviar
const handleSubmit = (e)=>{
  e.preventDefault();
  if(Object.entries(errors).length === 0){
      alert("Datos completos");
      //limpiamos form
      setErrors( validate({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }))
      // reiniciamos form
      setInputs(
        {
          name: '',
          email: '',
          phone: 0,
          subject: '',
          message: '',
        }
      )
  }else{ alert("Debe llenar todos los campos");

  }
}

  return ( 
    <div>
      <form onSubmit={handleSubmit} >
        <label>Nombre:</label>
        <input id="name" className={errors.name && "warning"} onChange={handleChange} name="name" value={inputs.name} placeholder= "Escribe tu nombre..." 
        type= "text"/>
        <p className='danger'>{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input id="email" className={errors.email && "warning"} onChange={handleChange} name="email" value={inputs.email} placeholder= "Escribe tu email..." 
        type="text"/>
        <p className='danger'>{errors.email}</p>
        <label>Teléfono:</label>
        <input id="phone" className={errors.phone && "warning"} onChange={handleChange} name="phone" value={inputs.phone} placeholder="Escribe un teléfono..." 
        type="number" />
        <p className='danger'>{errors.phone}</p>
        <label>Asunto:</label>
        <input id="subject" className={errors.subject && "warning"} onChange={handleChange} name="subject" value={inputs.subject} placeholder="Escribe el asunto..."
        type="text" />
        <p className='danger'>{errors.subject}</p>
        <label>Mensaje:</label>
        <textarea id="message" className={errors.message && "warning"} onChange={handleChange} name="message" value={inputs.message} placeholder="Escribe tu mensaje..." 
        type="text"/>
        <p className='danger'>{errors.message}</p>
        <button type="submit" >Enviar</button>
      </form>
    </div>
    
    );
}
