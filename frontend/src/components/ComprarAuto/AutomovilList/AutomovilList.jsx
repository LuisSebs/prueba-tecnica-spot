import React from 'react'
import { AutomovilCard } from '../AutomovilCard/AutomovilCard'
import './AutomovilList.css'
import defaultImage from '../../../assets/default.jpeg'

export const AutomovilList = ({ automoviles }) => {

  return (
    <div className='card-grid'>
        {automoviles.map(automovil => {
          const tieneImagenes = automovil.imagenes.length > 0
          return <AutomovilCard
                    key={automovil.idAutomovil}
                    marca={automovil.marca}
                    modelo={automovil.modelo}
                    year={automovil.year}
                    kilometraje={automovil.kilometraje}
                    precio={automovil.precio}
                    imagen={tieneImagenes ? automovil.imagenes[0].imagen : defaultImage}      
                />
        }
        )}
    </div>
  )
}
