import React from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import './Paginacion.css'

export const Paginacion = ({ totalPosts, poststPerPage, currentPage, setCurrentPage }) => {

    let pages = [];

    for (let i  = 1; i <= Math.ceil(totalPosts / poststPerPage); i++){
        pages.push(i)
    }

    return (
        <div className='paginacion-container'>
            <div className={`arrow-pagination ${currentPage===1 ? 'disabled' : ''}`} role='button' onClick={() => setCurrentPage(currentPage-1)}>
                <CaretLeft className='caret' weight='bold' size={20}/>
            </div>
            <div className='current-page-container'>
                <p>{currentPage} de {pages.length}</p>
            </div>
            <div className={`arrow-pagination ${currentPage===pages.length ? 'disabled' : ''}`} role='button' onClick={() => setCurrentPage(currentPage+1)}>
                <CaretRight className='caret' weight='bold' size={20}/>
            </div>
        </div>
    )
}
