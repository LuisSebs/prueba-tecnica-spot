/**
 * Funcion que da formato a la fecha
 * @param {Date} date - fecha de entrada del automovil
 * @returns {String} fecha del automovil en formato dd/mm/yyyy
 */
export const formatoFecha = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
};