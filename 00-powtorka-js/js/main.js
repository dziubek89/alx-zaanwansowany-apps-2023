console.log('hello')

// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

const people = [
    {
        name: "Michał",
        age: 12
    },
    {
        name: "Damian",
        age: 10
    },
    {
        name: "Wiktoria",
        age: 14
    },
    {
        name: "Agata",
        age: 8
    }
]

// Final Output:

// Wiktoria

const getOldestPerson = (inputArr) => {

    const person = inputArr.sort((a, b) => b.age - a.age)[0]
    return person.name

}

console.log(getOldestPerson(people))