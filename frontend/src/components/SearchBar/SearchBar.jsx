import React from 'react'
import './SearchBar.css'
import { Form, Row, Col } from 'react-bootstrap'
import { MagnifyingGlass } from '@phosphor-icons/react';

/**
 * @returns {JSX.Element} Componente barra de busqueda
 */
export const SearchBar = () => {
  return (
    <section>
        <div className='buscador-contenedor'>
            <input className='buscador' type="text" placeholder='Buscar por marca, modelo, año, color...' />
            <MagnifyingGlass className='lupa' size={30}/>
        </div>
    </section>
  )
}