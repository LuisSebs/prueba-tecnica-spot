export const mergeSortPrecio = (arreglo) => {
    mergeSortAuxPrecio(arreglo, 0, arreglo.length - 1);
}

const mergeSortAuxPrecio = (arreglo, lo, hi) => {
    if (hi <= lo) return;
    const mid = Math.floor(lo + (hi - lo) / 2); // Usamos Math.floor para asegurarnos de que mid sea un entero
    mergeSortAuxPrecio(arreglo, lo, mid);
    mergeSortAuxPrecio(arreglo, mid + 1, hi);
    mergePrecio(arreglo, lo, mid, hi);
}

const mergePrecio = (arreglo, lo, mid, hi) => {
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
        } else if (aux[j].precio < aux[i].precio) {
            arreglo[k] = aux[j];
            j++;
        } else {
            arreglo[k] = aux[i];
            i++;
        }
    }
}
