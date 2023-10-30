import React from "react";
import "./ParrafoCombustible.css"
import { useIds } from '../../servicios/IDsContext';

function ParrafoCombustible({ combustible }){

    const { precioMedio } = useIds();


    return (
        <div className="contenedor-parrafo">
            <h1>{combustible} en España</h1>
            <p>Seleccionar primero el tipo de combustible.</p>
            <p>Para buscar los mejores precios de {combustible} selecciona tu <strong>provincia y localidad</strong>.</p>
            <p>Si se selecciona <strong>solo la provincia</strong> se mostrarán todas las estaciones de servicio de la misma.</p>
            <p>Si se selecciona <strong>solo la localidad</strong> se mostrarán todas las estaciones de servicio de la misma.</p>  
            <p>En <strong id="precioMenor">VERDE</strong> aparecen los precios por debajo de la media y en <strong id="precioMayor">ROJO</strong> los precios por encima</p>
            {isNaN(precioMedio) ? "" : <p>Precio medio<strong> {precioMedio}</strong></p>}
        </div>
        
    );
}

export default ParrafoCombustible;