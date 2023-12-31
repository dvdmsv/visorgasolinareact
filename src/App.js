import './App.css';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion';
import ParrafoCombustible from './componentes/ParrafoCombustible/ParrafoCombustible';
import Selectores from './componentes/Selectores/Selectores';
import Tabla from './componentes/Tabla/Tabla';
import { IdsProvider } from './servicios/IDsContext.js';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function App() {
  const [parametroCombustible, setParametroCombustible] = useState(null);
  const [modoOscuro, setModoOscuro] = useState(null);

  useEffect(() => {
    // Obtén el valor actual del parámetro 'combustible' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const parametroCombustible = urlParams.get('combustible');
    //Se actualiza el estado del combustible
    setParametroCombustible(parametroCombustible);

    // Si 'combustible' no está presente redirige a la URL deseada
    if (!parametroCombustible) {
        // Redirige a la URL con el parámetro deseado
        window.location.href = `${window.location.origin}${window.location.pathname}?combustible=Precio%20Gasoleo%20A`;
    }
  }, []);

  const alternarModoOscuro = () =>{
    if(modoOscuro){
      setModoOscuro(false);
    }else{
      setModoOscuro(true);
    }
  }

  return (
    
    <div className={`App ${modoOscuro ? 'modoOscuro html' : ''}`}>
      <Form className="container-switch" >
        <Form.Check  
          type="switch"
          id="custom-switch"
          label="Modo oscuro"
          onChange={alternarModoOscuro}
        />
      </Form>
      <IdsProvider>
        <BarraNavegacion />
        
        <ParrafoCombustible 
          combustible={parametroCombustible}
        />
        <Selectores 
          combustible={parametroCombustible}
        />
        <Tabla
          combustibleURL={parametroCombustible}
        />
      </IdsProvider>
    </div>
  );
}

export default App;
