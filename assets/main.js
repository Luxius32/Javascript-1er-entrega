// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
};

esParOImpar(999)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorOIguales(nro1, nro2) {
    if (nro1 > nro2) {
        console.log(`El número ${nro1} es mayor`);
    } else if (nro1 < nro2) {
        console.log(`El número ${nro2} es mayor`)
    } else {
        console.log("Los números son iguales")
    }
}

mayorOIguales(10, 2)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco(nro) {
    if (nro % 5 === 0) {
        console.log(`El número ${nro} es multiplo de 5`);
    } else {
        console.log(`El número ${nro} no es múltiplo de 5`)
    }
}

multiploDeCinco(20)

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function escaleraDeNros(nro) {
    for (let r = 0; r <= nro; r++) {
        console.log(r)
    }
}

escaleraDeNros(10)

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(nro, palabra) {
    for (let r = 0; r < nro; r++) {
        console.log (palabra);
    }
}

repetirPalabra(10, "Rodri")

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]

function imprimirArray(array) {
    for (let i = 0; i <= array.length; i++){
        const imprimir = array[i];
        console.log (imprimir)
    }
}

imprimirArray(numeros)

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function todosMenosQuintaPosicion(array2) {
    for (let i = 0; i < array2.length; i++) {
        if (i !== 4) {
            console.log(array2[i])
        }
    }
}

todosMenosQuintaPosicion(array2)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const arrayNros = [8, 2, 5, 1, 3, 5]

function multiplicarElemento(array, nro) {
    // Uso bucle for para repetir una acción
    for (i = 0; i <= array.length; i++) {
        const resultado = array[i] * nro;
        console.log (resultado)
    }
}

multiplicarElemento(arrayNros, 5)