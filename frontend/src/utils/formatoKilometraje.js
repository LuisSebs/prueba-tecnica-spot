/**
 * Funcion que da formato al kilometraje
 * @param {Number} kilometraje - kilometraje del automovil 
 * @returns {String} kilometraje del automovil (Ejemplo: 270,000 km)
 */
export const formatoKilometraje = (kilometraje) => {
    let numStr = kilometraje.toString();
    let result = '';
    let count = 0;
    
    // Iteramos del final al inicio y separamos cada 3 caracteres por comas
    for (let i = numStr.length - 1; i >= 0; i--) {
      result = numStr[i] + result;
      count++;
      if (count === 3 && i !== 0) {
        result = ',' + result;
        count = 0;
      }
    }

    return result+" km";
}
