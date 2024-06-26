import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { useState } from 'react'
import { useEffect } from 'react'
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

    
    /**
     * Valores
     */
    const [marcasState, setMarcasState] = useState([])
    const [modelosState, setModelosState] = useState([])
    const [yearsState, setYearsState] = useState([])
    const [coloresState, setColoresState] = useState([])
    const [motoresState, setMotoresState] = useState([])
    const [transmisionesState, setTransmisionesState] = useState([])

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
        console.log(filtrosModeloState)
        // console.log(filtrosYearState)
        // console.log(filtrosColorState)
        // console.log(filtrosMotorState)
        // console.log(filtrosTransmisionState)
    }, [filtrosMarcaState, filtrosModeloState])

  return (
    <div className='filtrado-container'>
        <div className='filtrado'>
            <ListaDesplegable 
                titulo={'Marca'}
                listaItemsState={marcasState}
                filtrosState={filtrosMarcaState}
                setFiltrosState={setFiltrosMarcaState}
            />
            <ListaDesplegable 
                titulo={'Modelo'}
                listaItemsState={modelosState}
                filtrosState={filtrosModeloState}
                setFiltrosState={setFiltrosModeloState}
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
