import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { mergeSort } from '../../../utils/mergeSort'

export const Ordenamiento = ({ autosState, autosStateAux, setAutosStateAux }) => {

    /**Estados de interface */
    const [textOrdenarPorButton, setTextOrdenarPorButton] = useState('Ordenar Por')
    const [isOrdenarPorVisible, setIsOrdenarPorVisible] = useState(false)
    const [isBaratoSelected, setIsBaratoSelected] = useState(false)
    const [isCaroSelected, setIsCaroSelected] = useState(false)
    const [isNovedadesSelected, setIsNovedadesSelected] = useState(false)
    const [isAntiguedadesSelected, setIsAntiguedadesSelected] = useState(false)

    const viewOrdenarPor = (event) => {
        setIsOrdenarPorVisible(!isOrdenarPorVisible)
    }

    const ordenarPorMasBarato = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'precioBarato')
        setAutosStateAux(newAutos)

        setIsBaratoSelected(true)
        setIsOrdenarPorVisible(false)

        setIsCaroSelected(false)
        setIsNovedadesSelected(false)
        setIsAntiguedadesSelected(false)
        setTextOrdenarPorButton('Mas barato')
        
    }

    const ordenarPorMasCaro = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'precioCaro')
        setAutosStateAux(newAutos)

        setIsCaroSelected(true)
        setIsOrdenarPorVisible(false)

        setIsBaratoSelected(false)
        setIsNovedadesSelected(false)
        setIsAntiguedadesSelected(false)
        setTextOrdenarPorButton('Mas caro')
        
    }

    const ordenarPorNovedades = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'fechaEntradaNuevo')
        setAutosStateAux(newAutos)

        setIsNovedadesSelected(true)
        setIsOrdenarPorVisible(false)


        setIsBaratoSelected(false)
        setIsCaroSelected(false)
        setIsAntiguedadesSelected(false)
        setTextOrdenarPorButton('Novedades')

    }

    const ordenarPorAntiguedades = (event) => {

        const newAutos = [...autosStateAux]
        mergeSort(newAutos,'fechaEntradaViejo')
        setAutosStateAux(newAutos)

        setIsAntiguedadesSelected(true)
        setIsOrdenarPorVisible(false)

        setIsCaroSelected(false)
        setIsBaratoSelected(false)
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
                <button className={`${isCaroSelected ? 'selected' : ''}`} onClick={e => ordenarPorMasCaro(e)}>Mas caro</button>
                <button className={`${isBaratoSelected ? 'selected' : ''}`} onClick={e => ordenarPorMasBarato(e)}>Mas barato</button>                
                <button className={`${isNovedadesSelected ? 'selected' : ''}`} onClick={e => ordenarPorNovedades(e)}>Novedades</button>
                <button className={`${isAntiguedadesSelected ? 'selected' : ''}`} onClick={e => ordenarPorAntiguedades(e)}>Antiguedades</button>
            </div>
            }
        </div>
    </div>
  )
}
