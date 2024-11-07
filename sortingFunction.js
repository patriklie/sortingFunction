// Funksjon som genererer et tilfeldig tall mellom 1 og 10
const randomNumber = () => Math.floor(Math.random() * 10) + 1;

// Funksjon som lager en array med 10 tilfeldige tall mellom 1 og 100
const fillArr = () => new Array(10).fill(0).map(() => Math.floor(Math.random() * 100) + 1);

const arr1 = fillArr();
console.log('Array før sortering: ', arr1);

// Vanlig .sort() metode - fungerer kun for tekstbaserte verdier, og kan gi uventede resultater når det gjelder tall
console.log('Vanlig .sort(): ', arr1.sort())

// Sortering i stigende rekkefølge
const sorteringStigende = (a, b) => {
    if (a < b) {
        return -1; // a kommer før b
    } else if (a > b) {
        return 1; // b kommer før a
    } else {
        return 0; // a og b er like
    }
}

// Sortering i synkende rekkefølge
const sorteringSynkende = (a, b) => {
    if (a < b) {
        return 1; // b kommer før a
    } else if (a > b) {
        return -1; // a kommer før b
    } else {
        return 0; // a og b er like
    }
}

// Kortere versjoner av sorteringsfunksjonene
const kortStigende = (a, b) => a - b; // Sorterer tall i stigende rekkefølge
const kortSynkende = (a, b) => b - a; // Sorterer tall i synkende rekkefølge

console.log('Sortering stigende: ', arr1.sort(sorteringStigende));
console.log('Sortering synkende: ', arr1.sort(sorteringSynkende));
console.log('Sortering kort stigende: ', arr1.sort(kortStigende));
console.log('Sortering kort synkende: ', arr1.sort(kortSynkende));

// Eksplisitt sortering basert på en forhåndsdefinert rekkefølge
const inputArray = ["a", "b", "c", "d", "e", "f", "n", "y", "g"];
const orderArray = ["a", "n", "d", "y"];

const eksplisittSortering = (array, order) => {
    const eksplisittSammenligning = (a, b) => {
        // Her setter vi en høy indeks for elementene som ikke finnes i 'order' slik at de havner bakerst
        let indexOfA = order.length;
        let indexOfB = order.length;

        // Hvis 'a' finnes i 'order', får den indeksen sin derfra
        if (order.includes(a)) {
            indexOfA = order.indexOf(a);
        }

        // Hvis 'b' finnes i 'order', får den indeksen sin derfra
        if (order.includes(b)) {
            indexOfB = order.indexOf(b);
        }

        return indexOfA - indexOfB; // Returnerer differansen mellom indexene for 'a' og 'b'
    }
    return array.sort(eksplisittSammenligning); // Sorterer arrayen basert på eksplisitt sammenligning
}

console.log(eksplisittSortering(inputArray, orderArray)); // Sorterer inputArray basert på 'orderArray'