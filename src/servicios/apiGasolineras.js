export async function getProvincias(){
    try{
      const response = await fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/');
        const provincias = await response.json();
        return provincias;  
    } catch(error){
        console.error('Error al obtener provincias:', error);
    }
}

export async function getLocalidades(IDProvincia){
    try{
        const response = await fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/${IDProvincia}`);
        const localidades = await response.json();
        return localidades;  
      } catch(error){
          console.error('Error al obtener localidades:', error);
      }
}

export async function getGasolinerasLocalidad(IDMunicipio){
    try{
        const response = await fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${IDMunicipio}`);
        const gasolineras = await response.json();
        return gasolineras;  
      } catch(error){
          console.error('Error al obtener gasolineras:', error);
      }
}

export async function getGasolinerasProvincia(IDProvincia){
    try{
        const response = await fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/${IDProvincia}`);
        const gasolineras = await response.json();
        return gasolineras;  
      } catch(error){
          console.error('Error al obtener gasolineras:', error);
      }
}