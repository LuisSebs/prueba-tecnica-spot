import React from 'react'
import { AutomovilCard } from '../AutomovilCard/AutomovilCard'
import './AutomovilList.css'
import defaultImage from '../../../assets/default.jpeg'
import { useState } from 'react'
import { Paginacion } from './Paginacion/Paginacion'

export const AutomovilList = ({ automoviles }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)

  const lastPostsIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostsIndex - postsPerPage
  const currentPosts = automoviles.slice(firstPostIndex, lastPostsIndex)

  return <>
    <div className='card-grid'>
        {currentPosts.map(automovil => {
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
    <Paginacion 
      totalPosts={automoviles.length}
      poststPerPage={postsPerPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  </>
}
