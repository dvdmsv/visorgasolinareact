import React from "react";
import Form from 'react-bootstrap/Form';
import "./Selectores.css"
import { useEffect, useState } from 'react';
import { useIds } from '../../servicios/IDsContext';
import { getProvincias, getLocalidades } from "../../servicios/apiGasolineras";

function Selectores({ combustible }){
    
    const [provincias, setProvincias] = useState([]);
    const [localidades, setLocalidades] = useState([]);

    const { setIDProvincia, setIDMunicipio } = useIds();

    //Introducir las provincias en el select de provincias
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const result = await getProvincias();
                setProvincias(result);
            }catch (error) {
                console.error('Error al obtener provincias:', error);
            }
        };
        fetchData();
    }, []);

    //Introducir las localidades en el select de localidades
    function manejarSeleccionarProvincia(e){
        const IDProvincia = e.target.value;
        setIDProvincia(IDProvincia);
        document.cookie = `IDProvincia=${IDProvincia}`;

        const fetchData = async (IDPovincia) => {
            try {
                const result = await getLocalidades(IDPovincia);
                const localidades  = result.ListaEESSPrecio;
                //Filtrar localidades repetidas y localidades que no tienen gasolinera del combustible seleccionado
                const localidadesUnicas = localidades.filter(
                    (localidad, index, self) => self.findIndex((l) => l.IDMunicipio === localidad.IDMunicipio && localidad[combustible] !== "") === index
                );
                setLocalidades(localidadesUnicas);
            }catch (error) {
                console.error('Error al obtener provincias:', error);
            }
        };
        fetchData(IDProvincia);
    }

    function manejarSeleccionarLocalidad(e){
        const IDLocalidad = e.target.value
        setIDMunicipio(IDLocalidad);
        document.cookie = `IDLocalidad=${IDLocalidad}`;
    }

    return(
        <div className="contenedor-selectores">
            <Form.Select size="sm" className="selector" onChange={manejarSeleccionarProvincia}>
                <option hidden value> Provincia </option>
                {provincias.map(provincia =>{
                    return(
                        <option key={provincia.IDPovincia} value={provincia.IDPovincia}>{provincia.Provincia}</option>
                    )
                })}
            </Form.Select>
            <Form.Select size="sm" className="selector" onChange={manejarSeleccionarLocalidad}>
                <option hidden value> Localidad </option>
                {localidades?.map(localidad =>{
                    return(
                        <option key={localidad.IDMunicipio} value={localidad.IDMunicipio}>{localidad.Municipio}</option>
                    )
                })}
            </Form.Select>
        </div>
    );
}

export default Selectores;