/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useIds } from "../../servicios/IDsContext";
import { useEffect, useState } from 'react';
import { getGasolinerasLocalidad, getGasolinerasProvincia } from "../../servicios/apiGasolineras";
import { Table } from "react-bootstrap"
import { nanoid } from 'nanoid';
import "./Tabla.css"

function Tabla({ combustibleURL }){

    const { IDMunicipio, IDProvincia, setPrecioMedio, precioMedio } = useIds();
    const [gasolineras, setGasolineras] = useState();
    //console.log(document.cookie)

    //Obtiene las gasolineras de la provincia
    useEffect(()=>{
        const fetchData = async (IDProvincia) => {
            try {
                const result = await getGasolinerasProvincia(IDProvincia);
                setGasolineras(ordenarGasolineras(filtrarGasolineras(result.ListaEESSPrecio)));
                calcularPrecioMedio(filtrarGasolineras(result.ListaEESSPrecio));
            }catch (error) {
                console.error('Error al obtener provincias:', error);
            }
        };
        fetchData(IDProvincia);
    }, [IDProvincia]);

    //Obtiene las gasolineras de la localidad
    useEffect(()=>{
        const fetchData = async (IDMunicipio) => {
            try {
                const result = await getGasolinerasLocalidad(IDMunicipio);
                setGasolineras(ordenarGasolineras(filtrarGasolineras(result.ListaEESSPrecio)));
                calcularPrecioMedio(filtrarGasolineras(result.ListaEESSPrecio));
            }catch (error) {
                console.error('Error al obtener provincias:', error);
            }
        };
        fetchData(IDMunicipio);
    }, [IDMunicipio]);

    //Funcion que filtra las gasolineras que no tienen precios en el combustible seleccionado
    function filtrarGasolineras(gasolineras){ //Recibe el array de gasolineras
        const gasolinerasFiltradas = gasolineras.filter(gasolinera =>{
            return gasolinera[combustibleURL] !== ""; //Filtra las gasolineras que tienen vacío el campo de precio en el combustible
        })
        return gasolinerasFiltradas;
    }

    //Funcion que ordena las gasolineras por precio de menor a mayor 
    function ordenarGasolineras(gasolineras){
        const gasolinerasOrdenadas = gasolineras.sort((a, b) =>{
            const precioA = parseFloat(a[combustibleURL].replace(",", ".")); //Se pasa a float el string que contiene el precio y se sustituye la coma por un .
            const precioB = parseFloat(b[combustibleURL].replace(",", "."));
            return precioA - precioB; //Si restar precioA a precioB da negativo significa que es menor y por lo tanto se ordena antes
        });
        return gasolinerasOrdenadas;
    }

    function calcularPrecioMedio(gasolineras){
        let precioTotal = 0;
        var precioMedio = 0;
        for (const gasolinera of gasolineras) {
            precioTotal = precioTotal + parseFloat(gasolinera[combustibleURL].replace(",", "."));
        }
        precioMedio = precioTotal / gasolineras.length;
        setPrecioMedio(precioMedio.toFixed(3));
    }

    return(
        <div className="contenedor-tabla">
                <Table striped bordered="5px" variant="light" className="tabla">
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
                                    <td>{gasolinera['Rótulo']}</td>
                                    {/* <td><a target="_blank" rel="noopener noreferrer" href={'https://www.google.es/maps/place/' + gasolinera.Latitud.replace(",", ".") + ',' + gasolinera['Longitud (WGS84)'].replace(",", ".")}>{gasolinera['Dirección']}</a></td> */}
                                    <td><a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${gasolinera.Latitud.replace(",", ".")},${gasolinera['Longitud (WGS84)'].replace(",", ".")}`}>{gasolinera['Dirección']}</a></td>
                                    <td id={`${parseFloat(gasolinera[combustibleURL].replace(",", ".")) <= precioMedio ? "precioMenor" : "precioMayor"}`}>
                                        {gasolinera[combustibleURL]}
                                    </td>
                                </tr>
                            )
                       })}
                    </tbody>
                </Table>
            </div>
    );
}

export default Tabla;