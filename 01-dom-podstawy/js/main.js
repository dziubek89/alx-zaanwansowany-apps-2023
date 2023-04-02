

(() => {
    const button = document.getElementById('submit__button').addEventListener('click', (e) => {
        e.preventDefault()
        const name = document.getElementById('name')
        const message = document.getElementById('message')
        console.log(name, message)
        const ul = document.getElementById('messages__list')

        const li = document.createElement('li')
        li.innerHTML = `<strong> ${name.value} </strong> napisal
        <p> ${message.value} </p>`

        ul.appendChild(li)

        name.value = ''
        message.value = ''

    })

    const deleteButton = document.getElementById('delete__button').addEventListener('click', (e) => {
        const ul = document.getElementById('messages__list')
        ul.innerHTML = ''


        console.log(ul)

    })
})()