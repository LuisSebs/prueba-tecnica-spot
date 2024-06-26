import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AutomovilList } from './AutomovilList/AutomovilList.jsx'
import { getAutomovilesConImagenes } from '../../services/ServiceAutomovil.js'
import { Filtrado } from './Filtrado/Filtrado.jsx'
/**
 * Componente para comprar automoviles
 * @returns {JSX.Element} Componente para comprar automoviles
 */
export const ComprarAuto = () => {

    /**
     * Automoviles
     */
    const [autosState, setAutosState] = useState([])

    /**
     * Automoviles aux
     */
    const [autosStateAux, setAutosStateAux] = useState([])

    useEffect(() => {
        const fetchAutomoviles = async () => {
            try {
                // Esperamos la respuesta
                const data = await getAutomovilesConImagenes()
                setAutosState(data)
                setAutosStateAux(data)
            } catch (error) {
                console.log('Error al obtener los automoviles con las imagenes: ComprarAuto.jsx', error)
            }
        }
        fetchAutomoviles()
    }, [])

    return <>
        <Filtrado 
            autosState={ autosState }
            autosStateAux={ autosStateAux }
            setAutosStateAux={ setAutosStateAux }
        />
        <AutomovilList automoviles={autosStateAux} />
    </>
}
