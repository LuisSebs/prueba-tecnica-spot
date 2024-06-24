import React from 'react'
import { AutomovilCard } from '../AutomovilCard/AutomovilCard'
import './AutomovilList.css'

export const AutomovilList = ({ automoviles }) => {

  return (
    <div className='card-grid'>
        {automoviles.map(automovil => (
          <AutomovilCard
          marca={automovil.marca}
          modelo={automovil.modelo}
          year={automovil.year}
          kilometraje={automovil.kilometraje}
          precio={automovil.precio}
        />
        ))}
    </div>
  )
}
