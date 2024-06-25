import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { Ordenamiento } from './Ordenamiento'

export const Filtrado = ({ autosState, autosStateAux, setAutosStateAux }) => {

  return (
    <div className='filtrado-container'>
        <div className='filtrado'>
            <div className='dropdown-container'>
                <button className='button-filter'>Marca</button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>Modelo</button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>Año</button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>Color</button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>Motor</button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>Transmision</button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>Kilometraje</button>                
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
