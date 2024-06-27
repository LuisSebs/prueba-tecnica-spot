import React from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import './Paginacion.css'

/**
 * Componente que controla la paginacion
 * @param {Number} totalAutomoviles - cantidad total de automoviles
 * @param {Number} autosPorPagina - autos a mostrar en cada pagina
 * @param {Number} paginaActual - pagina que se esta mostrando
 * @param {Function} setPaginaActualState - funcion state para modificar el valor de la paginaActual
 * @returns {JSX.Element} Componente de paginacion
 */
export const Paginacion = ({ totalAutomoviles, autosPorPagina, paginaActualState, setPaginaActualState }) => {

    // Paginas totales
    let paginas = 0;
    for (let i  = 1; i <= Math.ceil(totalAutomoviles / autosPorPagina); i++){
        paginas++
    }

    return (
        <div className='paginacion-container'>
            <div className={`arrow-pagination ${paginaActualState===1 ? 'disabled' : ''}`} role='button' onClick={() => setPaginaActualState(paginaActualState-1)}>
                <CaretLeft className='caret' weight='bold' size={20}/>
            </div>
            <div className='current-page-container'>
                <p>{paginaActualState} de {paginas}</p>
            </div>
            <div className={`arrow-pagination ${paginaActualState===paginas ? 'disabled' : ''}`} role='button' onClick={() => setPaginaActualState(paginaActualState+1)}>
                <CaretRight className='caret' weight='bold' size={20}/>
            </div>
        </div>
    )
}
