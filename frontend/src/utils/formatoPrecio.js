/**
 * Funcion que da formato al precio
 * @param {Float} precio - precio del automovil
 * @returns {String} precio del automovil en formado monetario (Ejemplo: $20,000 MXN)
 */
export const formatoPrecio = (precio) => {
    let precioFormateado = precio.toLocaleString('en-US');
    precioFormateado = `$${precioFormateado} MXN`;
    return precioFormateado;
}
