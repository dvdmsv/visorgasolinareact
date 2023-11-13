import React from "react";
import Form from 'react-bootstrap/Form';
import { useIds } from "../../servicios/IDsContext";
import "./Switch.css"

function Switch(){
    const {modoOscuro, setModoOscuro} = useIds();

    const alternarModoOscuro = () =>{
        if(modoOscuro){
          setModoOscuro(false);
          console.log("Modo claro");
        }else{
          setModoOscuro(true);
          console.log("Modo oscuro");
        }
      }

    return(
        <Form className="container-switch" >
            <Form.Check  
                type="switch"
                id="custom-switch"
                label="Modo oscuro"
                onChange={alternarModoOscuro}
            />
      </Form>
    )
}

export default Switch;