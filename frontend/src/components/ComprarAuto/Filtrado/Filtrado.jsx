import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr'
import './Filtrado.css'
import { Ordenamiento } from './Ordenamiento'
import { useState } from 'react'
import { MarcaButton } from './MarcaButton'
import { useEffect } from 'react'
import { getMarcas } from '../../../services/ServiceAutomovil'

export const Filtrado = ({ autosState, autosStateAux, setAutosStateAux }) => {

    const [isMarcaVisible, setIsMarcaVisible] = useState(false)
    const [filtrosMarcaState, setFiltrosMarcaState] = useState(new Set())
    const [marcasState, setMarcasState] = useState([])

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                // Esperamos la respuesta
                const data = await getMarcas()
                setMarcasState(data)
            } catch (error) {
                console.log('Error al obtener los automoviles con las imagenes: ComprarAuto.jsx', error)
            }
        }
        fetchMarcas()
        console.log(filtrosMarcaState)
    }, [filtrosMarcaState])

    const toggleMarca = () => {
        setIsMarcaVisible(!isMarcaVisible)
    }

  return (
    <div className='filtrado-container'>
        <div className='filtrado'>
            <div className='dropdown-container'>
                <button className='button-filter'
                    onClick={toggleMarca}
                >
                    Marca
                    {isMarcaVisible && <CaretUp />}
                    {!isMarcaVisible && <CaretDown />}
                </button>
                <div className={`${!isMarcaVisible ? 'hidden' : 'dropdown-values'}`}>
                    {marcasState.map((marca, index) => {
                        return  <MarcaButton 
                                    key={index}
                                    filtrosMarcaState={filtrosMarcaState}
                                    setFiltrosMarcaState={setFiltrosMarcaState}
                                    marca={marca}
                                />
                    })}
                </div>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Modelo
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Año
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Color
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Motor
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Transmision
                    <CaretDown />
                </button>
            </div>
            <div className='dropdown-container'>
                <button className='button-filter'>
                    Kilometraje
                    <CaretDown />
                </button>                
            </div>
        </div>
        <Ordenamiento 
            autosState={ autosState }
            autosStateAux={ autosStateAux }
            setAutosStateAux={ setAutosStateAux }
        />
    </div>
  )
}
