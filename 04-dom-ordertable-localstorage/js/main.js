const tableBody = document.querySelector('#orderTableBody')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')
const removeOrdersButton = document.querySelector('#removeOrdersButton');
const calculateButton = document.querySelector('#calculate__button')

const sumEl = document.querySelector('#sum__span')
const avgEl = document.querySelector('#avgPrice__span')
// Struktura danych: tablica obiektów
// 1. Obiekty muszą mieć takie same pola
// 2. Kolejność zamówień ma znaczenie pod kątem dodania do HTML

let orders = JSON.parse(localStorage.getItem('orders')) || []



console.log(orders)


const renderOrders = () => {
    // for of
    tableBody.innerHTML = '';



    for (let order of orders) {
        tableBody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.price}zł</td>
      </tr>
    `
    }

}
const isUnique = (id) => {
    return orders.some(item => item.id === parseInt(id))
}

const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
        id: parseInt(orderId.value),
        name: orderName.value,
        price: parseFloat(orderPrice.value)
    }


    if (isUnique(orderId.value)) {
        alert('Id already exists')
        return
    }


    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders))


    handleCalculate()
    renderOrders();

    orderId.value = "";
    orderName.value = "";
    orderPrice.value = "";
}

const removeOrders = () => {
    orders = [];
    renderOrders();
}


const handleCalculate = () => {
    const sum = orders.reduce((sum, curr) => sum + parseFloat(curr.price), 0).toFixed(2)
    const avgPrice = (sum / orders.length).toFixed(2)

    sumEl.innerHTML = sum
    avgEl.innerHTML = avgPrice
}

renderOrders();
handleCalculate()
orderForm.addEventListener("submit", handleSubmit);
removeOrdersButton.addEventListener('click', removeOrders);
calculateButton.addEventListener('click', handleCalculate)


// Napisz kod, ktory wykona nastepujace zadania

// 1. W momencie klikniecia przycisku Calculate, wstaw do HTML w miejscu Sum - sume produktow, w miejscu Average Price - Srednia cene produktow z koszyka.
// 2. Napisz to w taki sposob, aby mozna bylo dodawac/usuwac elementy i przeliczac aktualna wartosc koszyka
// 3*. Przerob walidacje na ID, zeby dzialala obslugujac strukture tablicy obiektow