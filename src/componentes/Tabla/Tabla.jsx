import React from "react";
import { useIds } from "../../servicios/IDsContext";
import { useEffect, useState } from 'react';
import { getGasolinerasLocalidad, getGasolinerasProvincia } from "../../servicios/apiGasolineras";
import { Table } from "react-bootstrap"
import { nanoid } from 'nanoid';
import "./Tabla.css"

function Tabla(){

    const { IDMunicipio, IDProvincia } = useIds();
    const [gasolineras, setGasolineras] = useState();

    useEffect(()=>{
        const fetchData = async (IDMunicipio) => {
            try {
                const result = await getGasolinerasLocalidad(IDMunicipio);
                setGasolineras(result.ListaEESSPrecio);
            }catch (error) {
                console.error('Error al obtener provincias:', error);
            }
        };
        fetchData(IDMunicipio);
    }, [IDMunicipio]);

    useEffect(()=>{
        const fetchData = async (IDProvincia) => {
            try {
                const result = await getGasolinerasProvincia(IDProvincia);
                setGasolineras(result.ListaEESSPrecio);
            }catch (error) {
                console.error('Error al obtener provincias:', error);
            }
        };
        fetchData(IDProvincia);
    }, [IDProvincia]);

    console.log(gasolineras);
    return(
        <div className="contenedor-tabla">
                <Table striped bordered="5px" variant="light">
                    <thead>
                        <tr>
                            <th>Gasolinera</th>
                            <th>Dirección</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                       {gasolineras?.map(gasolinera =>{
                            return(
                                <tr key={nanoid()}>
                                    <td >{gasolinera['Rótulo']}</td>
                                    <td >{gasolinera['Dirección']}</td>
                                    <td >{gasolinera['Precio Gasoleo A']}</td>
                                </tr>
                            )
                       })}
                    </tbody>
                </Table>
            </div>
    );
}

export default Tabla;