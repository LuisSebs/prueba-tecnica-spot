import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { mergeSort } from '../../../utils/mergeSort'

export const Ordenamiento = ({ autosState, autosStateAux, setAutosStateAux }) => {

    /**Estados de interface */
    const [textOrdenarPorButton, setTextOrdenarPorButton] = useState('Ordenar Por')
    const [isOrdenarPorVisible, setIsOrdenarPorVisible] = useState(false)
    const [isPrecioSelected, setIsPrecioSelected] = useState(false)
    const [isNovedadesSelected, setIsNovedadesSelected] = useState(false)
    const [isAntiguedadesSelected, setIsAntiguedadesSelected] = useState(false)

    const viewOrdenarPor = (event) => {
        setIsOrdenarPorVisible(!isOrdenarPorVisible)
    }

    const ordenarPorPrecio = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'precio')
        setAutosStateAux(newAutos)

        setIsPrecioSelected(true)
        setIsOrdenarPorVisible(false)

        setIsNovedadesSelected(false)
        setIsAntiguedadesSelected(false)
        setTextOrdenarPorButton('Precio')
        
    }

    const ordenarPorNovedades = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'fechaEntradaNuevo')
        setAutosStateAux(newAutos)

        setIsNovedadesSelected(true)
        setIsOrdenarPorVisible(false)

        setIsPrecioSelected(false)
        setIsAntiguedadesSelected(false)
        setTextOrdenarPorButton('Novedades')

    }

    const ordenarPorAntiguedades = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'fechaEntradaViejo')
        setAutosStateAux(newAutos)

        setIsAntiguedadesSelected(true)
        setIsOrdenarPorVisible(false)

        setIsPrecioSelected(false)
        setIsNovedadesSelected(false)
        setTextOrdenarPorButton('Antiguedades')

    }    

  return (
    <div className='ordenamiento'>
        <div className='dropdown-container'>
            <button className='button-sort' onClick={e => viewOrdenarPor(e)}>
                {textOrdenarPorButton}
                {isOrdenarPorVisible && <CaretUp />}
                {!isOrdenarPorVisible && <CaretDown />}
            </button>
            {isOrdenarPorVisible && 
            <div className='dropdown-ordenar-por'>
                <button className={`${isPrecioSelected ? 'selected' : ''}`} onClick={e => ordenarPorPrecio(e)}>Precio</button>
                <button className={`${isNovedadesSelected ? 'selected' : ''}`} onClick={e => ordenarPorNovedades(e)}>Novedades</button>
                <button className={`${isAntiguedadesSelected ? 'selected' : ''}`} onClick={e => ordenarPorAntiguedades(e)}>Antiguedades</button>
            </div>
            }
        </div>
    </div>
  )
}
