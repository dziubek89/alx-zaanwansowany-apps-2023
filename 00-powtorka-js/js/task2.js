
// Zadanie z powtórki

// 1. Mając tablicę imion, dopisz do niej swoje imie. Nastepnie za pomoca metody tablica.length - 1, wypisz w konsoli swoje imie.

const names20 = ['Damian', 'Pawel', 'Michal']

names20.push("Krzychu")
console.log(names20)

// 2. Majac obiekt buta, sprawdz czy rozmiar jest wiekszy od 42. Jesli jest, to wypisz w konsoli "To jest duzy but"

const shoe50 = {
    brand: "nike",
    color: 'white',
    size: 40
}

const isBigger = shoe50.size > 42 ? console.log('To jest duży but') : null

// 3. Majac tablice produktów, oblicz sumę produktów, których kategoria to owoce

const products = [
    {
        name: 'jablko',
        category: 'fruits',
        price: 2.00
    },
    {
        name: 'kawa',
        category: 'other',
        price: 7.25
    },
    {
        name: 'banan',
        category: 'fruits',
        price: 4.99
    }
]


const productsWithCat = products.filter((item) => item.category === 'fruits')

const sumReduce = productsWithCat.reduce((sum, acc) => sum + acc.price, 0)
console.log(sumReduce)

let sum = 0
for (product of products) {
    if (product.category === 'fruits') {
        sum = sum + product.price
    }
}

console.log(sum)

// 4. Napisz funkcje sumProducts, ktora przyjmie tablice obiektow products z zadania 3, a nastepnie zwroci sume wszystkich produktow

const sumProducts = (prod) => {
    const sum = prod.reduce((sum, acc) => sum + acc.price, 0)
    return sum
}

console.log(sumProducts(products))