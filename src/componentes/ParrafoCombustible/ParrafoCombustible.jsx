import React from "react";
import "./ParrafoCombustible.css"

function ParrafoCombustible({ combustible }){
    return (
        <div className="contenedor-parrafo">
            <h1>{combustible} en España</h1>
            <p>Seleccionar primero el tipo de combustible.</p>
            <p>Para buscar los mejores precios de diésel selecciona tu <strong>provincia y localidad</strong>.</p>
            <p>Si se selecciona solo la provincia se mostrarán todas las estaciones de servicio de la misma.</p>
            <p>Si se selecciona solo la provincia se mostrarán todas las estaciones de servicio de la misma.</p>  
        </div>
        
    );
}

export default ParrafoCombustible;