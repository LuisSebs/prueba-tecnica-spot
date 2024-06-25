import React from 'react'
import { useState } from 'react'

export const MarcaButton = ({ filtrosMarcaState, setFiltrosMarcaState, marca }) => {

    const [active, setActive] = useState(false)

    const toggleButton = () => {
        // Si la marca no esta
        if (!filtrosMarcaState.has(marca)){
            // La agregamos
            setFiltrosMarcaState(new Set([...filtrosMarcaState, marca]))
        }else{
            // En caso contrario la sacamos
            const newSet = new Set([...filtrosMarcaState]);
            newSet.delete(marca);
            setFiltrosMarcaState(newSet);
        }
        setActive(!active)      
    }

  return (
    <button className={`${active ? 'selected' : ''}`} onClick={toggleButton}>{ marca }</button>
  )
}
