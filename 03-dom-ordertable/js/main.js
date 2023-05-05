// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli



const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()


    const orderId = document.querySelector('#id').value
    const orderName = document.querySelector('#name').value
    const orderPrice = document.querySelector('#price').value

    const tdIds = document.querySelectorAll('#id')


    if (parseFloat(orderId) > 0 && orderName.length > 2 && tdIds.some(el => el.innerHTML === orderId)) {
        const table = document.querySelector('#orderTable')


        const trElement = `
        <tr>
            <td id='id'>${orderId}</td>
            <td>${orderName}</td>
            <td>${orderPrice}</td>
        </tr>`

        table.innerHTML += trElement
    } else {
        alert('Correct form')
    }



})

const deleteHandler = document.querySelector('#delete').addEventListener('click', () => {
    const table = document.querySelector('#orderTable')
    table.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
  </tr>`

})