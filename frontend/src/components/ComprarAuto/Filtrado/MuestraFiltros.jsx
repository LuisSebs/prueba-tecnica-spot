import React from 'react'
import { X } from '@phosphor-icons/react/dist/ssr'

export const MuestraFiltros = ({ filtrosDiccionario }) => {

    const borrarFiltro = (filtroState, filtro, setFiltroState) => {
        const newSet = new Set(filtroState)
        newSet.delete(filtro)
        setFiltroState(newSet)
    }

  return (
    <div className='muestra-filtros-container'>
            {filtrosDiccionario.map((filtro) => {
                const valores = Array.from(filtro.valores) // Convertimos set en un array para usar map
                const setFiltro = filtro.setFiltro
                return  valores.map((valor, index) => {
                    return (
                        <button
                            key={`${filtro.nombre}-${index}`}
                            onClick={e => borrarFiltro(filtro.valores, valor, setFiltro)}
                        >
                            {valor}
                            <X className='tache' weight='bold' size={20}/>
                        </button>
                    )
                })  
            })}
    </div>
  )
}
