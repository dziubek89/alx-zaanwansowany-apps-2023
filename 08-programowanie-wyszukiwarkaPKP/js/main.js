// pobieranie elementów z formularza
const adForm = document.querySelector('#add');
const searchForm = document.querySelector('#searchForm');
const nameInput = document.querySelector('#name');
const fromInput = document.querySelector('#from');
const toInput = document.querySelector('#to');
const timeInput = document.querySelector('#time');
const dateInput = document.querySelector('#date');
const searchName = document.querySelector('#searchName');
const departureDate = document.querySelector('#departureDate');

const tbody = document.querySelector("#resultTableBody");
const citySelect = document.getElementById("city-select");
// obsługa zdarzenia submit formularza


adForm.addEventListener('submit', function (event) {
  event.preventDefault();

  addConnection();
});

departureDate.addEventListener('change', function (event) {
  console.log(departureDate.value)
  const rawConnections = JSON.parse(localStorage.getItem("connections"));
  const connections = rawConnections.filter(connect => connect.date === departureDate.value)
  displayConnections(connections);

})

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const rawConnections = JSON.parse(localStorage.getItem("connections"));
  const connections = rawConnections.filter(connect => connect.name.toLowerCase().includes(searchName.value.toLowerCase()))
  displayConnections(connections);
});

citySelect.addEventListener("change", function () {
  const selectedCity = citySelect.value;

  let connections = JSON.parse(localStorage.getItem("connections"))
  connections = connections.filter(city => city.from.includes(selectedCity))

  displayConnections(connections);

})

function addConnection() {

  const connection = {
    name: nameInput.value,
    from: fromInput.value,
    to: toInput.value,
    time: timeInput.value,
    date: dateInput.value
  };

  nameInput.value = ''
  fromInput.value = ''
  toInput.value = ''
  timeInput.value = ''
  dateInput.value = ''


  let connections = [];
  if (localStorage.getItem('connections')) {
    connections = JSON.parse(localStorage.getItem('connections'));
  }
  connections.push(connection);
  localStorage.setItem('connections', JSON.stringify(connections));
  displayConnections(connections)
}



function displayConnections(connections) {
  // const rawConnections = JSON.parse(localStorage.getItem("connections"));
  // let connections
  // connections = search ? rawConnections.filter(connect => connect.name === search) : rawConnections
  // connections = city ? connections.filter(city => city.from === city) : connections

  // Wyczyszczenie tabeli przed wyświetleniem nowych połączeń
  tbody.innerHTML = "";

  if (connections && connections.length > 0) {
    console.log(connections)
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];

      tbody.innerHTML += `
      <tr>
        <td>${connection.name}</td>
        <td>${connection.from}</td>
        <td>${connection.to}</td>
        <td>${connection.time}</td>
        <td>${connection.date}</td>
      </tr>
    `
    }
  }
}


const connections = JSON.parse(localStorage.getItem("connections"))
displayConnections(connections)
