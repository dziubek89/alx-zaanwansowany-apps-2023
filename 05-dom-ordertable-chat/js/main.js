// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore';


const authorInput = document.querySelector('#author')
const searchInput = document.querySelector('#searchInput')
const messageInput = document.querySelector('#message');
const messageForm = document.querySelector('#messageForm');
const searchForm = document.querySelector('#searchForm');
const tableBody = document.querySelector('#messageTableBody')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOUGZd4GCW4PtvjL7Rm5rfjt2EglAuzlk",
    authDomain: "zaawansowany-alx.firebaseapp.com",
    projectId: "zaawansowany-alx",
    storageBucket: "zaawansowany-alx.appspot.com",
    messagingSenderId: "1037478234002",
    appId: "1:1037478234002:web:c5e462f66f4b399520e34b",
    measurementId: "G-6SH1VWX51K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const exampleDoc = {
    author: 'John Doe',
    message: 'hello test'
};
const db = getFirestore(app);

const getData = async () => {
    const messagesFirebase = await getDocs(collection(db, "messages"));
    console.log(messagesFirebase)
}
getData()



// db.collection('messages').add(exampleDoc)
//     .then(docRef => {
//         console.log('Document added with ID: ', docRef.id);
//     })
//     .catch(error => {
//         console.error('Error adding document: ', error);
//     });


// Struktura danych: tablica obiektów
// 1. Obiekty muszą mieć takie same pola
// 2. Kolejność zamówień ma znaczenie pod kątem dodania do HTML

let messages = JSON.parse(localStorage.getItem('messages')) || []


const renderMessages = () => {
    // for of
    tableBody.innerHTML = '';



    for (let message of messages) {
        tableBody.innerHTML += `
      <tr>
        <td>${message.author}</td>
        <td>${message.message}</td>
      </tr>
    `
    }

}

const validateForm = (input) => {

    if (!input.author || input.author === '') {
        return false
    }

    if (!input.message || input.message.length < 2) {
        return false
    }

}


const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
        author: authorInput.value,
        message: messageInput.value,

    }

    if (!validateForm) {
        alert('incorrect data')
        return
    }

    messages.unshift(newMessage);

    localStorage.setItem('messages', JSON.stringify(messages))

    renderMessages();

    authorInput.value = "";
    messageInput.value = "";

}

const handleSearch = (event) => {
    event.preventDefault();
    const allMessages = JSON.parse(localStorage.getItem('messages')) || []

    const searchedPhrase = searchInput.value

    const findMessages = searchedPhrase === '' ? allMessages : allMessages.filter(item => item.message.includes(searchedPhrase))
    messages = findMessages
    renderMessages();

}





renderMessages()
// handleCalculate()
messageForm.addEventListener("submit", handleSubmit);
searchForm.addEventListener("submit", handleSearch);

// <!--
// Stwórz aplikacje Chat, która spełnia następujące kryteria:

// - Stworz formularz zawierajacy 2 pola: author i message
// - Stworz liste pod formularzem i spraw, zeby mozna bylo dodawac nowe wiadomosci
// - Nowe wiadomosci dodaj na gore listy
// - Zrob walidacje na formularz, ze pole author nie moze byc puste i pole message musi wiecej niz 2 znaki
// - Dane zapisuj do localStorage

// * Nad formularzem dodaj input i przycisk, ktory umozliwi wyszukiwanie wiadomosci. Jesli wpiszesz jakas fraze i wcisniesz przycisk, wyswietl tylko te wiadomości, gdzie tekst pokrywa się z wyszukiwaną frazą

// ** Rozszerz aplikację do projektu npm, dodaj bibliotekę Parcel i firebase, a następnie zrób połączenie z Firebase aby pobierać i wysyłać wiadomości -->