import axios from 'axios'

const API_URL = 'http://localhost:5000'

/**
 * Funcion que solicita los automoviles al backend y los regresa
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
