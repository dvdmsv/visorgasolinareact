import './App.css';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion';
import Selectores from './componentes/Selectores/Selectores';
import Tabla from './componentes/Tabla/Tabla';
import { IdsProvider } from './servicios/IDsContext.js';

function App() {
  return (
    <div className="App">
      <IdsProvider>
        <BarraNavegacion />
        <Selectores />
        <Tabla />
      </IdsProvider>
    </div>
  );
}

export default App;
