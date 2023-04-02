
// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie
// const images = [
//     'https://images.pexels.com/photos/776078/pexels-photo-776078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18IG7hjcPiMneoyJIOiTLc_0gHS2Zklc_Di1DTMSHGZ4Mv3I_Vf7_rnG2TUTEKCToVe4&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZfnQBnQh6HMzK9nDkKDLgFXJYaH63s0UD4oe-fzlGA5jZdZa_stDFGhy6JmvVVtdv2g&usqp=CAU'
// ]




(() => {
    let counter = 0
    const images = [
        'https://images.pexels.com/photos/776078/pexels-photo-776078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18IG7hjcPiMneoyJIOiTLc_0gHS2Zklc_Di1DTMSHGZ4Mv3I_Vf7_rnG2TUTEKCToVe4&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZfnQBnQh6HMzK9nDkKDLgFXJYaH63s0UD4oe-fzlGA5jZdZa_stDFGhy6JmvVVtdv2g&usqp=CAU'
    ]
    const imgContainer = document.querySelector('#img__container')
    imgContainer.src = images[counter]
    const butt = document.querySelectorAll('#_button')
    butt.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(item.name)
            if (item.name === 'add') {
                counter = counter + 1

                if (counter > images.length - 1) {
                    imgContainer.setAttribute('src', images[0])
                    counter = 0
                } else {
                    imgContainer.setAttribute('src', images[counter])
                }
                return
            }

            if (item.name === 'prev') {
                counter = counter - 1

                if (counter < 0) {
                    imgContainer.setAttribute('src', images[images.length - 1])
                    counter = images.length - 1
                } else {
                    imgContainer.setAttribute('src', images[counter])
                }

            }

        })
    })
    console.log(butt)
})()
// let counter = 0

// const imgContainer = document.querySelector('#img__container')
// imgContainer.setAttribute('src', images[counter])
// console.log(images[counter])

// const buttonNext = document.querySelector('#button__next')
// buttonNext.addEventListener('click', (e) => {
//     e.preventDefault()
//     counter = counter + 1

//     if (counter > images.length - 1) {
//         imgContainer.setAttribute('src', images[0])
//         counter = 0
//     } else {
//         imgContainer.setAttribute('src', images[counter])
//     }


// })


// const buttonPrev = document.querySelector('#button__prev')
// buttonPrev.addEventListener('click', (e) => {
//     e.preventDefault()
//     counter = counter - 1

//     if (counter < 0) {
//         imgContainer.setAttribute('src', images[images.length - 1])
//         counter = images.length - 1
//     } else {
//         imgContainer.setAttribute('src', images[counter])
//     }
// })
