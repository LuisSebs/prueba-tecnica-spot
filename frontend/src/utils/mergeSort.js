/**
 * Funcion que ordena un arreglo de automoviles
 * @param {Object[]} arreglo - arreglo a ordenar
 * @param {String} by - criterio para ordenar:
 *  'precio' - ordena por precio
 *  'fechaEntradaNuevo' - ordena por fecha de entrada (mas nuevo - mas viejo)
 *  'feachaEntradaViejo' - ordena por fecha de entrada (mas viejo - mas nuevo)
 */
export const mergeSort = (arreglo, by) => {
    if(by === 'precio')
        mergeSortAux(arreglo, precio, 0, arreglo.length - 1);
    else if (by === 'fechaEntradaNuevo')
        mergeSortAux(arreglo, fechaEntradaNuevo, 0, arreglo.length - 1);
    else if (by === 'fechaEntradaViejo')
        mergeSortAux(arreglo, fechaEntradaViejo, 0, arreglo.length - 1);
}

/**
 * Funcion auxiliar de mergeSort
 * @param {Object[]} arreglo - arreglo de automoviles
 * @param {Function} by - predicado
 * @param {Number} lo - indice de inicio
 * @param {Number} hi - indice de final
 * @returns - Null
 */
const mergeSortAux = (arreglo, by, lo, hi) => {
    if (hi <= lo) return;
    const mid = Math.floor(lo + (hi - lo) / 2); // Usamos Math.floor para asegurarnos de que mid sea un entero
    mergeSortAux(arreglo, by, lo, mid);
    mergeSortAux(arreglo, by, mid + 1, hi);
    merge(arreglo, by, lo, mid, hi);
}

/**
 * Funcion que hace el swap
 * @param {Object[]} arreglo - arreglo de automoviles
 * @param {Function} by - criterio
 * @param {Number} lo - indice de inicio
 * @param {Number} mid - indice de la mitad 
 * @param {Number} hi - indice de final
 */
const merge = (arreglo, by, lo, mid, hi) => {
    let i = lo;
    let j = mid + 1;
    let aux = [...arreglo];
    
    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            arreglo[k] = aux[j];
            j++;
        } else if (j > hi) {
            arreglo[k] = aux[i];
            i++;
        } else if (by(aux[j],aux[i])) {
            arreglo[k] = aux[j];
            j++;
        } else {
            arreglo[k] = aux[i];
            i++;
        }
    }
}
const precio = (object1, object2) => object1.precio < object2.precio
const fechaEntradaNuevo = (object1, object2) => new Date(object1.fechaEntrada) > new Date(object2.fechaEntrada)
const fechaEntradaViejo = (object1, object2) => new Date(object1.fechaEntrada) < new Date(object2.fechaEntrada)
