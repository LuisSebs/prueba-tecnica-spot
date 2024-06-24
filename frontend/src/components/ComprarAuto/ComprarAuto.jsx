import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AutomovilList } from './AutomovilList/AutomovilList'
import { getAutomovilesConImagenes } from '../../services/ServiceAutomovil.js'
/**
 * Componente para comprar automoviles
 * @returns {JSX.Element} Componente para comprar automoviles
 */
export const ComprarAuto = () => {

    /**
     * Automoviles
     */
    const [autosState, setAutosState] = useState([])

    useEffect(() => {
        const fetchAutomoviles = async () => {
            try {
                // Esperamos la respuesta
                const data = await getAutomovilesConImagenes()
                setAutosState(data)
            } catch (error) {
                console.log('Error al obtener los automoviles con las imagenes: ComprarAuto.jsx', error)
            }
        }
        fetchAutomoviles()
    }, [])

    return (
        <AutomovilList automoviles={autosState} />
    )
}
