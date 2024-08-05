//modals

function showModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("Overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("Overlay").style.display = "none";
}

function closeEditModal(category) {
  document.getElementById(`edit${category}`).style.display = "none";
  document.getElementById("Overlay").style.display = "none";
}

//movie

function AddMovie() {
  //get the table body
  var tbody = document.querySelector("table tbody");
  //get the form values
  var movieID = document.getElementById("movieID").value;
  var title = document.getElementById("title").value;
  var duration = document.getElementById("duration").value;
  var genre = document.getElementById("genre").value;
  var releaseDate = document.getElementById("releaseDate").value;
  var rating = document.getElementById("rating").value;
  //create a new row
  var newRow = document.createElement("tr");
  //create and append cells to the row
  newRow.innerHTML = `
    <td>${movieID}</td>
    <td>${title}</td>
    <td>${duration}</td>
    <td>${genre}</td>
    <td>${releaseDate}</td>
    <td>${rating}</td>
    <td class="action-buttons">
    <button onclick="showEditModal(this.parentElement.parentElement, 'Movie')">Edit Movie</button>
    <button class="delete-button" onclick="deleteMovie(this.parentElement.parentElement)">Delete</button>
    </td>
  `;
  //append the new row to the table body
  tbody.appendChild(newRow);
  saveMovieData();
  //reset the form
  document.getElementById("movieForm").reset();
  //close the modal
  closeModal();
}

function saveMovieData() {
  //get all rows from the table body
  var rows = document.querySelectorAll("table tbody tr");
  var movieData = [];

  rows.forEach(row => {
    var cells = row.querySelectorAll("td");
    var movie = {
      movieID: cells[0].innerText,
      title: cells[1].innerText,
      duration: cells[2].innerText,
      genre: cells[3].innerText,
      releasteDate: cells[4].innerText,
      rating: cells[5].innerText
    };
    movieData.push(movie);
  });
}

function deleteMovie(row) {
  row.remove();
}

//screeing

function AddScreening() {
  //get the table body
  var tbody = document.querySelector("table tbody");
  //get the form values
  var ScreeningID = document.getElementById("ScreeningID").value;
  var ScreeningTime = document.getElementById("ScreeningTime").value;
  var TheaterID = document.getElementById("TheaterID").value;
  var ScreenNum = document.getElementById("ScreenNum").value;
  var MovieID = document.getElementById("MovieID").value;
  //create a new row
  var newRow = document.createElement("tr");
  //create and append cells to the row
  newRow.innerHTML = `
    <td>${ScreeningID}</td>
    <td>${ScreeningTime}</td>
    <td>${TheaterID}</td>
    <td>${ScreenNum}</td>
    <td>${MovieID}</td>
    <button onclick="showEditModal(this.parentElement.parentElement, 'Screening')">Edit Screening</button>
    <button class="delete-button" onclick="deleteScreening(this.parentElement.parentElement)">Delete</button>
  `;
  //append the new row to the table body
  tbody.appendChild(newRow);
  saveScreeningData();
  //reset the form
  document.getElementById("screeningForm").reset();
  //close the modal
  closeModal();
}

function saveScreeningData() {
  //get all rows from the table body
  var rows = document.querySelectorAll("table tbody tr");
  var screeningData = [];

  rows.forEach(row => {
    var cells = row.querySelectorAll("td");
    var screening = {
      screeningID: cells[0].innerText,
      ScreeningTime: cells[1].innerText,
      TheaterID: cells[2].innerText,
      ScreenNum: cells[3].innerText,
      MovieID: cells[4].innerText
    };
    screeningData.push(screening);
  });
}

function deleteScreening(row) {
  row.remove();
}

//theater

function AddTheater() {
  //get the table body
  var tbody = document.querySelector("table tbody");
  //get the form values
  var TheaterID = document.getElementById("TheaterID").value;
  var NumofScreens = document.getElementById("NumofScreens").value;
  var City = document.getElementById("City").value;
  var State = document.getElementById("State").value;
  var Address = document.getElementById("Address").value;
  var ZipCode = document.getElementById("ZipCode").value;
  //create a new row
  var newRow = document.createElement("tr");
  //create and append cells to the row
  newRow.innerHTML = `
    <td>${TheaterID}</td>
    <td>${NumofScreens}</td>
    <td>${City}</td>
    <td>${State}</td>
    <td>${Address}</td>
    <td>${ZipCode}</td>
    <button onclick="showEditModal(this.parentElement.parentElement, 'Theater')">Edit Theater</button>
    <button class="delete-button" onclick="deleteTheater(this.parentElement.parentElement)">Delete</button>
  `;
  //append the new row to the table body
  tbody.appendChild(newRow);
  saveTheaterData();
  //reset the form
  document.getElementById("TheaterForm").reset();
  //close the modal
  closeModal();
}

function saveTheaterData() {
  // get all rows from the table body
  var rows = document.querySelectorAll("table tbody tr");
  var theaterData = [];

  rows.forEach(row => {
    var cells = row.querySelectorAll("td");
    var theater = {
      TheaterID: cells[0].innerText,
      NumofScreens: cells[1].innerText,
      City: cells[2].innerText,
      State: cells[3].innerText,
      Address: cells[4].innerText,
      ZipCode: cells[5].innerText
    };
    theaterData.push(theater);
  });
}


function deleteTheater(row) {
  row.remove();
}


//ticket

function AddTicket() {
  //get the table body
  var tbody = document.querySelector("table tbody");
  //get the form values
  var TicketID = document.getElementById("TicketID").value;
  var SeatNum = document.getElementById("SeatNum").value;
  var ScreeingID = document.getElementById("ScreeningID").value;
  var CustomerID = document.getElementById("CustomerID").value;
  //create a new row
  var newRow = document.createElement("tr");
  //create and append cells to the row
  newRow.innerHTML = `
    <td>${TicketID}</td>
    <td>${SeatNum}</td>
    <td>${ScreeingID}</td>
    <td>${CustomerID}</td>
    <button onclick="showEditModal(this.parentElement.parentElement, 'Ticket')">Edit Ticket</button>
    <button class="delete-button" onclick="deleteTicket(this.parentElement.parentElement)">Delete</button>
  `;
  //append the new row to the table body
  tbody.appendChild(newRow);
  //reset the form
  document.getElementById("TicketForm").reset();
  //close the modal
  closeModal();
}



function deleteTicket(row) {
  row.remove();
}

//customer

function AddCustomer() {
  //get the table body
  var tbody = document.querySelector("table tbody");
  //get the form values
  var CustomerID = document.getElementById("CustomerID").value;
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;
  //create a new row
  var newRow = document.createElement("tr");
  //create and append cells to the row
  newRow.innerHTML = `
    <td>${CustomerID}</td>
    <td>${FirstName}</td>
    <td>${LastName}</td>
    <td>${Email}</td>
    <button onclick="showEditModal(this.parentElement.parentElement, 'Customer')">Edit Customer</button>
    <button class="delete-button" onclick="deleteCustomer(this.parentElement.parentElement)">Delete</button>
  `;
  //append the new row to the table body
  tbody.appendChild(newRow);
  //reset the form
  document.getElementById("customerForm").reset();
  //close the modal
  closeModal();
  //save the customer data to local storage
}

function saveCustomerData() {
  //get all rows from the table body
  var rows = document.querySelectorAll("table tbody tr");
  var customerData = [];

  rows.forEach(row => {
    var cells = row.querySelectorAll("td");
    var customer = {
      CustomerID: cells[0].innerText,
      FirstName: cells[1].innerText,
      LastName: cells[2].innerText,
      Email: cells[3].innerText
    };
    customerData.push(customer);
  });
  
  
  //save the updated data to local storage
  localStorage.setItem("customerData", JSON.stringify(customerData));
}

function deleteCustomer(row) {
  row.remove();
}

let editRow = null;

function showEditModal(row, category) {
  //set the global variable editRow to the row that is being edited
  editRow = row;

  //get the form elements for the specified category
  var form = document.getElementById(`edit${category}Form`);
  if (!form) {
    console.error(`Form with ID 'edit${category}Form' not found.`);
    return;
  }

  //populate the form with the data from the row
  const cellCount = row.cells;
  for (let i = 0; i < cellCount; i++) {
    if (i < form.elements) {
      form.elements[i].value = row.cells[i].innerText;
    }
  }

  //show the modal
  document.getElementById(`edit${category}`).style.display = "block";
  document.getElementById("Overlay").style.display = "block";
}


function updateItem(category) {
  //get the form elements for the specified category
  var form = document.getElementById(`edit${category}Form`);
  if (!form) {
    console.error(`Form with ID 'edit${category}Form' not found.`);
    return;
  }

  //check if editRow is set
  if (!editRow) {
    console.error('No row selected for editing.');
    return;
  }

  //get the number of cells in the row
  const cellCount = editRow.cells;

  //update the row with the new values from the form
  for (let i = 0; i < cellCount; i++) {
    if (i < form.elements) { //ensure form elements exist
      editRow.cells[i].innerText = form.elements[i].value;
    }
  }

  //save the updated data to local storage
  //save${category}Data();

  //close the modal
  closeEditModal(category);
}
