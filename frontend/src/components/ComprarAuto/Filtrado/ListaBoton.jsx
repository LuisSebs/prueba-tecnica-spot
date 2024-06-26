import React from 'react'
import { useState } from 'react'

/**
 * Componente boton para lista desplegable
 * @param {Object[]} filtrosState - lista de filtros
 * @param {Function} setFiltrosState - funcion para modificar la lista de filtros
 * @param {String} texto - texto a mostrar en el boton
 * @param {Object} valor - valor a agregar a la lista de filtros al darle click
 * @return {JSX.Element} componente boton para lista desplegable
 */
export const ListaBoton = ({ filtrosState, setFiltrosState, texto, valor }) => {

    // Estado para saber si el boton esta activo
    const [activoState, setActivoState] = useState(false)

    const toggleButton = () => {
        // Si el valor no esta
        if (!filtrosState.has(valor)){
            // La agregamos
            setFiltrosState(new Set([...filtrosState, valor]))
        }else{
            // En caso contrario la sacamos
            const newSet = new Set([...filtrosState]);
            newSet.delete(valor);
            setFiltrosState(newSet);
        }
        setActivoState(!activoState)      
    }

  return (
    <button className={`${activoState ? 'selected' : ''}`} onClick={ toggleButton }>{ texto }</button>
  )
}
