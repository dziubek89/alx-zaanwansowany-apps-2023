

(() => {
    const button = document.querySelector('#submit__button').innerHTML
    const form = document.querySelector('form').setAttribute('class', 'my-form')
    console.log(button)

    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.value = input.name
    })

    const ul = document.querySelector('#messages__list')
    const message = document.createElement('li')

    message.innerHTML = `<strong>Ada</strong> napisala
        <p> Super dzien. Duzo sie nauczylam </p>
      </li>`

    ul.appendChild(message)

    const messages = [
        {
            author: 'Pawel',
            message: 'Ale dzisiaj super dzien'
        },
        {
            author: "Magda",
            message: "Zimno jest"
        }
    ]

    messages.forEach(item => {
        const liEl = document.createElement('li')
        liEl.innerHTML = `<strong>${item.author}</strong> napisal/a
    <p> ${item.message} </p>
  </li>`
        ul.appendChild(liEl)

    })



    console.log(inputs)
})()