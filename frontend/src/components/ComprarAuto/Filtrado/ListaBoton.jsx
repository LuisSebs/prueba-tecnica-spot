import React, { useEffect } from 'react'
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

    /**
     * Usamos useEffect para manejar el caso en el que se elimine
     * un filtro desde el componente MostrarFiltros y asi desactivar
     * el boton. Esto lo hacemos verificando si 
     */
    useEffect(() => {   
       const checkFiltroStatus = () => {
          if (filtrosState.has(valor)) {
            setActivoState(true)
        } else {
            setActivoState(false)
        }
       }
       checkFiltroStatus()
    }, [filtrosState])

    const toggleButton = () => {
      // Si el filtro está, lo eliminamos
      if (filtrosState.has(valor)) {
        const newSet = new Set([...filtrosState]);
        newSet.delete(valor);
        setFiltrosState(newSet);
      }else{
        // Si no está, lo agregamos
        setFiltrosState(new Set([...filtrosState, valor]))
      }
      /**
       * Nota: No necesitamos activar/desactivar el boton en esta funcion
       * debido a que en automatico se hara en la funcion del useEffect
       * cuando se detecte que se cambia el estado del filtro.
       */
    }    

  return (
    <button className={`${activoState ? 'selected' : ''}`} onClick={ toggleButton }>{ texto }</button>
  )
}
