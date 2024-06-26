import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import { ListaBoton } from './ListaBoton.jsx'
import { useState } from 'react'

/**
 * Componente que recibe un arreglo de items/opciones y los agrega a una lista 
 * desplegable, estos seran valores que se agreguen a una lista de filtros
 * @author Arrieta Mancera Luis Sebastian
 * @param {String} titulo - titulo de la lista desplegable
 * @param {Object[]} listaItemsState - lista de items a agregar
 * @param {Object[]} filtrosState - lista de filtros a aplicar
 * @param {Function} setFiltrosState - funcion para modificar la lista de filtros
 * @param {Boolean} isVisible - si la lista desplegable es visible
 * @param {Function} toggleDropdown - función para cambiar la visibilidad
 * @return {JSX.Element} componente de lista desplegable
 */
export const ListaDesplegable = ({ titulo, listaItemsState, filtrosState, setFiltrosState, isVisible, toggleDropdown  }) => {

  return (
    <div className='dropdown-list-container'>
        <button className='button-filter'onClick={ toggleDropdown }>
            {titulo}
            {isVisible && <CaretUp />}
            {!isVisible && <CaretDown />}
        </button>
        <div className={`${isVisible ? 'dropdown-values' : 'hidden'}`}>
            {listaItemsState.map((item, index) => {
                return  <ListaBoton 
                            key={ index }
                            filtrosState={ filtrosState }
                            setFiltrosState={ setFiltrosState }
                            texto={ item }
                            valor={ item }
                        />
            })}
        </div>
    </div>
  )
}
