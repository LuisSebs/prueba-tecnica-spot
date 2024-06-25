import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import { ListaBoton } from './ListaBoton'
import { useState } from 'react'

export const ListaDesplegable = ({ titulo, listaItemsState, filtrosState, setFiltrosState }) => {

    const [isListaVisible, setIsListaVisible] = useState(false)

    const toggleButton = () => {
        setIsListaVisible(!isListaVisible)
    }

  return (
    <div className='dropdown-container'>
        <button className='button-filter'
            onClick={toggleButton}
        >
            {titulo}
            {isListaVisible && <CaretUp />}
            {!isListaVisible && <CaretDown />}
        </button>
        <div className={`${!isListaVisible ? 'hidden' : 'dropdown-values'}`}>
            {listaItemsState.map((item, index) => {
                return  <ListaBoton 
                            key={index}
                            filtrosState={filtrosState}
                            setFiltrosState={setFiltrosState}
                            item={item}
                        />
            })}
        </div>
    </div>
  )
}
