import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { mergeSort } from '../../../utils/mergeSort'
import { useRef } from 'react'

export const Ordenamiento = ({ autosState, autosStateAux, setAutosStateAux }) => {
    /**Estados de interface */
    const [textOrdenarPorButton, setTextOrdenarPorButton] = useState('Ordenar Por')
    const [isOrdenarPorVisible, setIsOrdenarPorVisible] = useState(false)

    const ordenarPorAux = (by) => {
        setIsOrdenarPorVisible(false)
        const newAutos = [...autosStateAux]
        mergeSort(newAutos,by)
        setAutosStateAux(newAutos)
    }

    const viewOrdenarPor = (event) => {
        setIsOrdenarPorVisible(!isOrdenarPorVisible)
    }

    const ordenarPorMasBarato = (event) => {
        ordenarPorAux('precioBarato')
        setTextOrdenarPorButton('Mas barato')
    }

    const ordenarPorMasCaro = (event) => {
        ordenarPorAux('precioCaro')
        setTextOrdenarPorButton('Mas caro')
    }

    const ordenarPorNovedades = (event) => {
        ordenarPorAux('fechaEntradaNuevo')
        setTextOrdenarPorButton('Novedades')
    }

    const ordenarPorAntiguedades = (event) => {
        ordenarPorAux('fechaEntradaViejo')
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
                <button onClick={e => ordenarPorMasCaro(e)}>Mas caro</button>
                <button onClick={e => ordenarPorMasBarato(e)}>Mas barato</button>                
                <button onClick={e => ordenarPorNovedades(e)}>Novedades</button>
                <button onClick={e => ordenarPorAntiguedades(e)}>Antiguedades</button>
            </div>
            }
        </div>
    </div>
  )
}
