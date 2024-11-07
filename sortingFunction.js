// satt opp hjelpefunksjoner randomNumber og fillArr til sorting
const randomNumber = () =>  Math.floor(Math.random() * 10) + 1;

// oneliner som fyller lager og fyller en array med random tall mellom 1 og 100
const fillArr = () => new Array(10).fill(0).map(() => Math.floor(Math.random() * 100) + 1);

// eksplisitt sortering

// sortering med custom .sort() funksjon
console.log(randomNumber());