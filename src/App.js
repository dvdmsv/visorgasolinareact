import './App.css';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion';
import ParrafoCombustible from './componentes/ParrafoCombustible/ParrafoCombustible';
import Selectores from './componentes/Selectores/Selectores';
import Tabla from './componentes/Tabla/Tabla';
import { IdsProvider } from './servicios/IDsContext.js';

function App() {

  const urlParam = new URLSearchParams(window.location.search);
  const parametro = urlParam.get("combustible");


  return (
    <div className="App">
      <IdsProvider>
        <BarraNavegacion />
        <ParrafoCombustible 
          combustible={parametro}
        />
        <Selectores />
        <Tabla
          combustibleURL={parametro}
        />
      </IdsProvider>
    </div>
  );
}

export default App;
