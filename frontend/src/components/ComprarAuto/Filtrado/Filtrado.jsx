import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { Ordenamiento } from './Ordenamiento'
import { useState } from 'react'
import { MarcaButton } from './MarcaButton'
import { useEffect } from 'react'

export const Filtrado = ({ autosState, autosStateAux, setAutosStateAux }) => {

    const [isMarcaVisible, setIsMarcaVisible] = useState(false)
    const [filtrosMarcaState, setFiltrosMarcaState] = useState(new Set())

    useEffect(() => {
        console.log(filtrosMarcaState)
    }, [filtrosMarcaState])

    const toggleMarca = () => {
        setIsMarcaVisible(!isMarcaVisible)
    }

  return (
    <div className='filtrado-container'>
        <div className='filtrado'>
            <div className='dropdown-container'>
                <button className='button-filter'
                    onClick={toggleMarca}
                >
                    Marca
                    <CaretDown />
                </button>
                <div className='dropdown-values'>
                    <MarcaButton 
                        filtrosMarcaState={filtrosMarcaState}
                        setFiltrosMarcaState={setFiltrosMarcaState}
                        marca='Tesla' 
                    />
                    <MarcaButton 
                        filtrosMarcaState={filtrosMarcaState}
                        setFiltrosMarcaState={setFiltrosMarcaState}
                        marca='Toyota' 
                    />
                </div>
            </div>
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
