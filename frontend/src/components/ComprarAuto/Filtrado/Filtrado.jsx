import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { useState, useEffect, useRef } from 'react'
import { getColores, getMarcas, getModelos, getMotores, getTransmisiones, getYears } from '../../../services/ServiceAutomovil.js'
import { Ordenamiento } from './Ordenamiento.jsx'
import { ListaDesplegable } from './ListaDesplegable.jsx'

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

    const filtros = [filtrosMarcaState, filtrosModeloState, filtrosYearState, filtrosColorState, filtrosMotorState, filtrosTransmisionState]
    
    /**
     * Valores
     */
    const [marcasState, setMarcasState] = useState([])
    const [modelosState, setModelosState] = useState([])
    const [yearsState, setYearsState] = useState([])
    const [coloresState, setColoresState] = useState([])
    const [motoresState, setMotoresState] = useState([])
    const [transmisionesState, setTransmisionesState] = useState([])


    // Estado para la lista desplegable activa
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                // Esperamos la respuesta
                const data = await getMarcas()
                setMarcasState(data)
            } catch (error) {
                console.log('Error al obtener los automoviles con las imagenes: ComprarAuto.jsx', error)
            }
        }
        const fetchModelos = async () => {
            try {
                // Esperamos la respuesta
                const data = await getModelos()
                setModelosState(data)
            } catch (error) {
                console.log('Error al obtener los modelos: ComprarAuto.jsx', error)
            }
        }
        const fetchYears = async () => {
            try {
                // Esperamos la respuesta
                const data = await getYears()
                setYearsState(data)
            } catch (error) {
                console.log('Error al obtener los años: ComprarAuto.jsx', error)
            }
        }
        const fetchColores = async () => {
            try {
                // Esperamos la respuesta
                const data = await getColores()
                setColoresState(data)
            } catch (error) {
                console.log('Error al obtener los colores: ComprarAuto.jsx', error)
            }
        }
        const fetchMotores= async () => {
            try {
                // Esperamos la respuesta
                const data = await getMotores()
                setMotoresState(data)
            } catch (error) {
                console.log('Error al obtener los motores: ComprarAuto.jsx', error)
            }
        }
        const fetchTransmisiones = async () => {
            try {
                // Esperamos la respuesta
                const data = await getTransmisiones()
                setTransmisionesState(data)
            } catch (error) {
                console.log('Error al obtener las transmisiones: ComprarAuto.jsx', error)
            }
        }
        fetchMarcas()
        fetchModelos()
        fetchYears()
        fetchColores()
        fetchMotores()
        fetchTransmisiones()
        // console.log(filtrosMarcaState)
        // console.log(filtrosModeloState)
        // console.log(filtrosYearState)
        // console.log(filtrosColorState)
        // console.log(filtrosMotorState)
        // console.log(filtrosTransmisionState)
    }, [])

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
