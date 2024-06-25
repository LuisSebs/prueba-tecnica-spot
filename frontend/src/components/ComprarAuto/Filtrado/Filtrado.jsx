import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { Ordenamiento } from './Ordenamiento'
import { useState } from 'react'
import { useEffect } from 'react'
import { getMarcas } from '../../../services/ServiceAutomovil'
import { ListaDesplegable } from './ListaDesplegable'

export const Filtrado = ({ autosState, autosStateAux, setAutosStateAux }) => {

    
    const [filtrosMarcaState, setFiltrosMarcaState] = useState(new Set())
    
    // Marcas
    const [marcasState, setMarcasState] = useState([])

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
        fetchMarcas()
        console.log(filtrosMarcaState)
    }, [filtrosMarcaState])

  return (
    <div className='filtrado-container'>
        <div className='filtrado'>
            <ListaDesplegable 
                titulo={'Marca'}
                listaItemsState={marcasState}
                filtrosState={filtrosMarcaState}
                setFiltrosState={setFiltrosMarcaState}
            />
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Modelo
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Año
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Color
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Motor
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Transmision
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Kilometraje
                    <CaretDown />
                </button>                
            </div>
        </div>
        <Ordenamiento 
            autosState={ autosState }
            autosStateAux={ autosStateAux }
            setAutosStateAux={ setAutosStateAux }
        />
    </div>
  )
}
