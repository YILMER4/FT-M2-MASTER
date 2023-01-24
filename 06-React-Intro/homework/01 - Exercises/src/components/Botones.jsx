import { Button } from "bootstrap";
import React from "react";

class Botones extends React{
    render(){
        return(
            <div>
                <Button 
                onClick={() => alert('Tu mensaje')}>
                    Módulo 1
                </Button>
                <Button 
                onClick={() => alert('Tu mensaje')}>
                    Módulo 2
                </Button>
            </div>
                
            ); 
    }
};

export default Botones;