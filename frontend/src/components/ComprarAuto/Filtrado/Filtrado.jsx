import React from 'react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { useState } from 'react'

export const Filtrado = () => {

    const [isOrdenarPorVisible, setIsOrdenarPorVisible] = useState(false)
    const [isPrecioSelected, setIsPrecioSelected] = useState(false)
    const [isNovedadesSelected, setIsNovedadesSelected] = useState(false)


    let ordenarPor = ''

    const viewOrdenarPor = (event) => {
        setIsOrdenarPorVisible(!isOrdenarPorVisible)
    }

    const ordenarPorPrecio = (event) => {
        ordenarPor = 'precio'
        setIsPrecioSelected(true)
        setIsNovedadesSelected(false)
        setIsOrdenarPorVisible(false)
        console.log(ordenarPor)

    }

    const ordenarPorNovedades = (event) => {
        ordenarPor = 'novedades'
        setIsNovedadesSelected(true)
        setIsPrecioSelected(false)
        setIsOrdenarPorVisible(false)
        console.log(ordenarPor)
    }

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
        <div className='ordenamiento'>
            <div className='dropdown-container'>
                <button className='button-sort' onClick={e => viewOrdenarPor(e)}>Ordenar por</button>
                {isOrdenarPorVisible && 
                <div className='dropdown-ordenar-por'>
                    <button className={`${isPrecioSelected ? 'selected' : ''}`} onClick={e => ordenarPorPrecio(e)}>Precio</button>
                    <button className={`${isNovedadesSelected ? 'selected' : ''}`} onClick={e => ordenarPorNovedades(e)}>Novedades</button>
                </div>
                }
            </div>
        </div>
    </div>
  )
}
