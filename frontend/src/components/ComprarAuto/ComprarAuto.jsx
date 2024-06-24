import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { AutomovilList } from './AutomovilList/AutomovilList'

export const ComprarAuto = () => {

    const [autosState, setAutosState] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/get_automoviles')
            .then((response) => {
                const data = response.data;
                setAutosState(data.data)
            })
            .catch((error) => {
                console.log('error')
            })
    }, [])


    return (
        <AutomovilList automoviles={autosState} />
    )
}
