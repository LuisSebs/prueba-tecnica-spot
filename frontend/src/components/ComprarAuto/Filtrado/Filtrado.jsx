import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { useState, useEffect, useRef } from 'react'
import { Ordenamiento } from './Ordenamiento.jsx'
import { ListaDesplegable } from './ListaDesplegable.jsx'
import { getColores, getMarcas, getModelos, getMotores, getTransmisiones, getYears } from '../../../services/ServiceAutomovil.js'

export const Filtrado = ({ autosState, autosStateAux, setAutosStateAux }) => {

    /**
     * Filtros 
     */
    const [filtrosMarcaState, setFiltrosMarcaState] = useState(new Set())
    const [filtrosModeloState, setFiltrosModeloState] = useState(new Set())
    const [filtrosYearState, setFiltrosYearState] = useState(new Set())
    const [filtrosColorState, setFiltrosColorState] = useState(new Set())
    const [filtrosMotorState, setFiltrosMotorState] = useState(new Set())
    const [filtrosTransmisionState, setFiltrosTransmisionState] = useState(new Set())
    
    /**
     * Valores
     */
    const [marcasState, setMarcasState] = useState([])
    const [modelosState, setModelosState] = useState([])
    const [yearsState, setYearsState] = useState([])
    const [coloresState, setColoresState] = useState([])
    const [motoresState, setMotoresState] = useState([])
    const [transmisionesState, setTransmisionesState] = useState([])

    const [dataLoaded, setDataLoaded] = useState(false); // Bandera datos cargados
    const [activeDropdown, setActiveDropdown] = useState(null); // Lista desplegable activa

    // Guardamos los filtros que nos interesa su estado
    const filtros = [filtrosMarcaState, filtrosModeloState, filtrosYearState, filtrosColorState, filtrosMotorState, filtrosTransmisionState]
 
    useEffect(() => {
        // Consume el servicio de automovil para cargar los datos
        const fetchData = async () => {
            try {
                const promises = [
                    getMarcas().then(data => setMarcasState(data)),
                    getModelos().then(data => setModelosState(data)),
                    getYears().then(data => setYearsState(data)),
                    getColores().then(data => setColoresState(data)),
                    getMotores().then(data => setMotoresState(data)),
                    getTransmisiones().then(data => setTransmisionesState(data))
                ];
                await Promise.all(promises);
                setDataLoaded(true);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setDataLoaded(false);
            }
        };

        // Si no se han cargado los datos
        if(!dataLoaded)
            fetchData()
        
        aplicaFiltros()
    }, filtros)

    const aplicaFiltros = (filtrosMarcaState, filtrosModeloState, filtrosYearState, filtrosColorState, filtrosMotorState, filtrosTransmisionState) => {
        // Aqui va la aplicacion de los filtros
        console.log(filtros)
    }

    /**
     * Cambia la lista desplegable activa
     * @param {String} dropdownName - nombre de la lista desplegable
     */
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

  return (
    <div className='filtrado-container'>
        <div className='filtrado'>
            <ListaDesplegable
                titulo={'Marca'}
                listaItemsState={marcasState}
                filtrosState={filtrosMarcaState}
                setFiltrosState={setFiltrosMarcaState}
                isVisible={activeDropdown === 'marca'}
                toggleDropdown={() => toggleDropdown('marca')}
            />
            <ListaDesplegable 
                titulo={'Modelo'}
                listaItemsState={modelosState}
                filtrosState={filtrosModeloState}
                setFiltrosState={setFiltrosModeloState}
                isVisible={activeDropdown === 'modelo'}
                toggleDropdown={() => toggleDropdown('modelo')}
            />
            <ListaDesplegable 
                titulo={'Año'}
                listaItemsState={yearsState}
                filtrosState={filtrosYearState}
                setFiltrosState={setFiltrosYearState}
                isVisible={activeDropdown === 'year'}
                toggleDropdown={() => toggleDropdown('year')}
            />
            <ListaDesplegable 
                titulo={'Color'}
                listaItemsState={coloresState}
                filtrosState={filtrosColorState}
                setFiltrosState={setFiltrosColorState}
                isVisible={activeDropdown === 'color'}
                toggleDropdown={() => toggleDropdown('color')}
            />
            <ListaDesplegable 
                titulo={'Motor'}
                listaItemsState={motoresState}
                filtrosState={filtrosMotorState}
                setFiltrosState={setFiltrosMotorState}
                isVisible={activeDropdown === 'motor'}
                toggleDropdown={() => toggleDropdown('motor')}
            />
            <ListaDesplegable 
                titulo={'Transmision'}
                listaItemsState={transmisionesState}
                filtrosState={filtrosTransmisionState}
                setFiltrosState={setFiltrosTransmisionState}
                isVisible={activeDropdown === 'transmision'}
                toggleDropdown={() => toggleDropdown('transmision')}
            />
        </div>
        <Ordenamiento 
            autosState={ autosState }
            autosStateAux={ autosStateAux }
            setAutosStateAux={ setAutosStateAux }
        />
    </div>
  )
}
