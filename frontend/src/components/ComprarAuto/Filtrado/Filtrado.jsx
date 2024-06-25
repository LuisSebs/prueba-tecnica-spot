import React from 'react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { useState } from 'react'

export const Filtrado = () => {

    const [textOrdenarState, setTextOrdenarState] = useState('Ordenar por')

    let filtros = []

    const ordenarPorPrecio = (e) => {
        e.preventDefault()
        setTextOrdenarState('Precio')
    }

  return (
    <div className='filtrado-container'>
        {/* Filtrado */}
        <div className='filtrado'>
            <ul>
                <li>
                    <a href="#">Marca</a>
                    <ul className='dropdown'>
                        <li>Toyota</li>
                        <li>Nissan</li>
                        <li>Tesla</li>
                    </ul>
                </li>
                <li>
                    <a href="#">Modelo</a>
                    <ul className='dropdown'>
                        <li>Avanza</li>
                        <li>Modelo 3</li>
                    </ul>
                </li>
                <li>
                    <a href="#">Año</a>
                </li>
                <li>
                    <a href="#">Color</a>
                </li>
                <li>
                    <a href="#">Motor</a>
                </li>
                <li>
                    <a href="#">Transmision</a>
                </li>
                <li>
                    <a href="#">Automatica</a>
                </li>
            </ul>
        </div>
        {/* Ordenamiento */}
        <div className='ordenamiento'>
            <ul>
                <li>
                    <a href="#">{textOrdenarState}</a>
                    <ul className='dropdown'>
                        <li><a href="#"onClick={e => ordenarPorPrecio(e)}>Precio</a></li>
                        <li><a href="#">Novedades</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}
