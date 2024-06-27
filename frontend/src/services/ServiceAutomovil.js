import axios from 'axios'

const API_URL = 'http://localhost:5000'

/**
 * Servicio para obtener los automoviles con imagenes desde la API
 * @returns {Promise<Object[]>} automoviles
 */
export const getAutomovilesConImagenes = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_automoviles_con_imagenes`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener los automoviles con las imagenes: ServiceAutomovil.js', error)
    throw error
  }
}

/**
 * Servicio para obtener las marcas de los automoviles desde la API
 * @returns {Promise<Object[]>} marcas de los automoviles
 */
 export const getMarcas = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_marcas`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener las marcas: ServiceAutomovil.js', error)
    throw error
  }
}

/**
 * Servicio para obtener los modelos de los automoviles desde la API
 * @returns {Promise<Object[]>} modelos de los automoviles
 */
 export const getModelos = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_modelos`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener los modelos: ServiceAutomovil.js', error)
    throw error
  }
}

/**
 * Servicio para obtener los años de los automoviles desde la API
 * @returns {Promise<Object[]>} años de los automoviles
 */
 export const getYears = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_years`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener los años: ServiceAutomovil.js', error)
    throw error
  }
}

/**
 * Servicio para obtener los colores de los automoviles desde la API
 * @returns {Promise<Object[]>} colores de los automoviles
 */
 export const getColores = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_colores`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener los colores: ServiceAutomovil.js', error)
    throw error
  }
}

/**
 * Servicio para obtener los motores de los automoviles desde la API
 * @returns {Promise<Object[]>} motores de los automoviles
 */
 export const getMotores = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_motores`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener los motores: ServiceAutomovil.js', error)
    throw error
  }
}

/**
 * Servicio para obtener las transmisiones de los automoviles desde la API
 * @returns {Promise<Object[]>} transmisiones de los automoviles
 */
 export const getTransmisiones = async () => {
  try {
    // Esperamos la respuesta
    const response = await axios.get(`${API_URL}/get_transmisiones`)
    return response.data.data
  } catch (error) {
    console.log('Error al obtener las transmisiones: ServiceAutomovil.js', error)
    throw error
  }
}



