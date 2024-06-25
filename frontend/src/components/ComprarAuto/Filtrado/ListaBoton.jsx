import React from 'react'
import { useState } from 'react'

export const ListaBoton = ({ filtrosState, setFiltrosState, item }) => {

    // Estado para saber si el boton esta activo
    const [activoState, setActivoState] = useState(false)

    const toggleButton = () => {
        // Si el item no esta
        if (!filtrosState.has(item)){
            // La agregamos
            setFiltrosState(new Set([...filtrosState, item]))
        }else{
            // En caso contrario la sacamos
            const newSet = new Set([...filtrosState]);
            newSet.delete(item);
            setFiltrosState(newSet);
        }
        setActivoState(!activoState)      
    }

  return (
    <button className={`${activoState ? 'selected' : ''}`} onClick={toggleButton}>{ item }</button>
  )
}
