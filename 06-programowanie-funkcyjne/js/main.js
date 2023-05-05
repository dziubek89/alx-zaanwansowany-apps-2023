

// 1. Napisz funkcje greeting(), ktora przyjmie jako argument imie a nastepnie zwroci "Hello + imie"

// -----------------

const greeting = (inputName) => {
    return `Hello ${inputName}`
}

console.log(greeting('Kris'))



// 2. Napisz funkcje sumElements(), ktora przyjmie tablice obiektow z polami name i price.

// -----------------
const products = [
    {
        name: 'banan',
        price: '11'
    },
    {
        name: 'truskawka',
        price: '21'
    },
]
const sumElements = (inputArray) => {
    return inputArray.reduce((sum, curent) => sum + parseFloat(curent.price), 0)
}

console.log(sumElements(products))

// 3. Napisz funkcje getLetters(), ktora przyjmie tablice imion, a nastepnie zwroci tablice zawierajaca ile jest liter w kazdym slowie

// getLetters(['Damian', 'Ania']) -> [6,4]

const names = ['Ania', 'kasia', 'zbigniew']

const getLetters = (inputArray) => {
    return inputArray.map(item => item.length)
}

console.log(getLetters(names))

// 4. Napisz funckje getTheMostExpensiveProduct, ktora przyjmie tablice z zadania 2 i zwróci obiekt, zawierający najdrozszy produkt

const getTheMostExpensiveProduct = (inputArray) => {
    const isMostExpansive = inputArray.sort((a, b) => b.price - a.price)
    return isMostExpansive[0]
}

console.log(getTheMostExpensiveProduct(products))


// 5. Napisz funkcje findNameIndex, ktora przyjmie tablice imion i imie, ktore ma wyszukac, a nastepnie zwroci indeks tego elementu

// findNameIndex(['Damian', 'Ania'], 'Ania') -> 1
// findNameIndex(['Damian', 'Ania'], 'Damian') -> 0

const namesArray = ['Kasia', 'Frania', 'Zenek']
const findNameIndex = (inputArray, name) => {
    return inputArray.indexOf(name)
}

console.log(findNameIndex(namesArray, 'Zenek'))


// 1. Napisz funkcje searchByText, ktora przyjmuje tablice obiektow wiadomosci i fraze po ktorej ma szukac. Zwroc elementy, ktore spelniaja dana fraze


// const messages = [
//     {
//       author: "Damian",
//       message: "Jest fajnie"
//     },
//     {
//       author: "Paweł",
//       message: "Kurs ALX jest super"
//     }
//   ]

// searchMessagesByText(messages, 'nie') => [{ author: 'Damian', message: 'Jest fajnie' }]

//   const searchMessagesByText = (collection, phrase) => {
//     const results = [];

//     collection.forEach(element => {
//       // funkcja includes sluzy do sprawdzania, czy dany element znajduje sie w tablicy lub w stringu
//       // * mozemy tez uzyc funkcji indexOf. Jesli element jest w tablicy, to jego index jest wiekszy od 0
//       if(element.message.includes(phrase)) {
//         results.push(element);
//       }
//     })

//     return results;
//   }

//   const searchMessagesByTextWithFilter = (collection, phrase) => {
//     // funkcja filter, tak samo jak find i findIndex, przyjmuje boolean w argumencie. Jesli boolean jest true, to wynik przejdzie do nowej tablicy, natomiast jesli jest false, to nie przejdzie
//     return collection.filter(element => {
//       return element.message.includes(phrase);
//     });
//   }

//   console.log(searchMessagesByText(messages, 'super'));
//   console.log(searchMessagesByTextWithFilter(messages, 'e'));


// 2. Napisz funckje getSumOfFruits, ktora przyjmuje tablice obiektów i zwraca sume samych owocow.

//   const products3 = [
//     {
//       name: "Jablko",
//       category: "Fruits",
//       price: 4.99
//     },
//     {
//       name: "Banan",
//       category: "Fruits",
//       price: 7.00
//     },
//     {
//       name: "Chleb",
//       category: "Bakery",
//       price: 3.99
//     }
//   ]

// getSumOfFruits(products3) -> 11.99


// 1. Napisz funkcje searchByText, ktora przyjmuje tablice obiektow wiadomosci i fraze po ktorej ma szukac. Zwroc elementy, ktore spelniaja dana fraze


const messages = [
    {
        author: "Damian",
        message: "Jest fajnie"
    },
    {
        author: "Paweł",
        message: "Kurs ALX jest super"
    }
]

const searchByText = (inputArray, searchedPhase) => {
    return inputArray.filter(item => item.message.includes(searchedPhase))

}

console.log(searchByText(messages, 'fajnie'))

// 2. Napisz funckje getSumOfFruits, ktora przyjmuje tablice obiektów i zwraca sume samych owocow.

const products3 = [
    {
        name: "Jablko",
        category: "Fruits",
        price: 4.99
    },
    {
        name: "Banan",
        category: "Fruits",
        price: 7.00
    },
    {
        name: "Chleb",
        category: "Bakery",
        price: 3.99
    }
]

// getSumOfFruits(products3) -> 11.99

const getSumOfFruits = (inputArray) => {
    return inputArray.reduce((sum, current) => current.category === 'Fruits' ? sum + current.price : sum, 0)
}

console.log(getSumOfFruits(products3))