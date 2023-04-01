

const products = [
    {
        name: 'banan',
        price: 4.99
    },
    {
        name: "chleb",
        price: 3.25
    },
    {
        name: 'ser',
        price: 7.00
    },
    {
        name: 'baton',
        price: 1.99
    }
]

const sumPrice = products.reduce((sum, curr) => sum + parseFloat(curr.price), 0)
const avgPrice = sumPrice / products.length

console.log(sumPrice)
console.log(avgPrice)