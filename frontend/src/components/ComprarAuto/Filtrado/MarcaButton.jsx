import React from 'react'
import { useState } from 'react'

export const MarcaButton = ({ filtrosMarcaState, setFiltrosMarcaState, marca }) => {

    const [active, setActive] = useState(false)

    const toggleButton = () => {
        if (!filtrosMarcaState.has(marca)){
            setFiltrosMarcaState(new Set([...filtrosMarcaState, marca]))
        }else{
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
