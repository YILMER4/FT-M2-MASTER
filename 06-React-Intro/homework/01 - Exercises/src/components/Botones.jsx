//import { Button } from "react";
import React from "react";

// Esto es un ejemplo de componente de clase

export default class Botones extends React.Component{
    render(){
        // puede haber logica
        return(
            <div>
                <button 
                onClick={() => alert(this.props.alerts.m1)}>
                    Módulo 1
                </button>
                <button 
                onClick={() => alert(this.props.alerts.m2)}>
                    Módulo 2
                </button>
            </div>
        ); 
    }
};
