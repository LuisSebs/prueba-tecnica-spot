import React from 'react'
import { AutomovilCard } from '../AutomovilCard/AutomovilCard'
import './AutomovilList.css'
import defaultImage from '../../../assets/default.jpeg'
import { useState } from 'react'
import { Paginacion } from './Paginacion/Paginacion'

/**
 * Componente que muestra un grid de automoviles con paginacion
 * @param {Object[]} automoviles - automoviles a mostrar
 * @returns {JSX.Element} Componente de lista de automoviles
 */
export const AutomovilList = ({ automoviles }) => {

  // Pagina actual
  const [paginaActualState, setPaginaActualState] = useState(1)
  // Autos por pagina
  const [autosPorPaginaState, setAutosPorPaginaState] = useState(12)

  const indiceCorte = paginaActualState * autosPorPaginaState
  const indiceInicio = indiceCorte - autosPorPaginaState
  const newAutos = automoviles.slice(indiceInicio, indiceCorte)

  return <>
    <div className='automovil-list-container'>
      <div className='card-grid'>
          {newAutos.map(automovil => {
            const tieneImagenes = automovil.imagenes.length > 0
            return <AutomovilCard
                      key={automovil.idAutomovil}
                      marca={automovil.marca}
                      modelo={automovil.modelo}
                      year={automovil.year}
                      kilometraje={automovil.kilometraje}
                      fechaEntrada={new Date(automovil.fechaEntrada)}
                      precio={automovil.precio}
                      imagen={tieneImagenes ? automovil.imagenes[0].imagen : defaultImage}      
                  />
          }
          )}
      </div>
      <Paginacion 
        totalAutomoviles={automoviles.length}
        autosPorPagina={autosPorPaginaState}
        paginaActualState={paginaActualState}
        setPaginaActualState={setPaginaActualState}
      />
    </div>
  </>
}
