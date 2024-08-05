const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'data_manipulation_queries'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

let movie = [];
let screenings = [];
let theaters = [];
let tickets = [];
let customers = [];


//add a new movie
app.post('/addMovie', (req, res) => {
  const newMovie = req.body;
  screenings.push(newMovie);
  res.json(newMovie);
  
});

//delete a movie
app.delete('/deleteMovie/:id', (req, res) => {
  const id = req.params.id;
  movie = movie.filter(movie => movie.MovieID !== id);
  res.json({ message: 'movie deleted' });
});


//add a new screening
app.post('/addScreening', (req, res) => {
  const newScreening = req.body;
  screenings.push(newScreening);
  res.json(newScreening);
});

//delete a screening
app.delete('/deleteScreening/:id', (req, res) => {
  const id = req.params.id;
  screenings = screenings.filter(screening => screening.ScreeningID !== id);
  res.json({ message: 'Screening deleted' });
});

//add a new theater
app.post('/addTheater', (req, res) => {
  const newTheater = req.body;
  theaters.push(newTheater);
  res.json(newTheater);
});

//delete a theater
app.delete('/deleteTheater/:id', (req, res) => {
  const id = req.params.id;
  theaters = theaters.filter(theater => theater.TheaterID !== id);
  res.json({ message: 'Theater deleted' });
});

//add a new ticket
app.post('/addTicket', (req, res) => {
  const newTicket = req.body;
  tickets.push(newTicket);
  res.json(newTicket);
});

//delete a ticket
app.delete('/deleteTicket/:id', (req, res) => {
  const id = req.params.id;
  tickets = tickets.filter(ticket => ticket.TicketID !== id);
  res.json({ message: 'Ticket deleted' });
});

//add a new customer
app.post('/addCustomer', (req, res) => {
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.json(newCustomer);
});

//delete a customer
app.delete('/deleteCustomer/:id', (req, res) => {
  const id = req.params.id;
  customers = customers.filter(customer => customer.CustomerID !== id);
  res.json({ message: 'Customer deleted' });
});

//update a movie
app.put('/update/movie', (req, res) => {
  const { movieID, title, duration, genre, releaseDate, rating } = req.body;
  const sql = 'UPDATE movies SET title = ?, duration = ?, genre = ?, releaseDate = ?, rating = ? WHERE movieID = ?';
  db.query(sql, [title, duration, genre, releaseDate, rating, movieID], (err) => {
    if (err) throw err;
    res.json({ success: true, message: 'Movie updated successfully' });
  });
});

//update a screening
app.put('/update/screening', (req, res) => {
  const { screeningID, ScreeningTime, TheaterID, ScreenNum, MovieID } = req.body;
  const sql = 'UPDATE screenings SET ScreeningTime = ?, TheaterID = ?, ScreenNum = ?, MovieID = ? WHERE screeningID = ?';
  db.query(sql, [ScreeningTime, TheaterID, ScreenNum, MovieID, screeningID], (err) => {
    if (err) throw err;
    res.json({ success: true, message: 'Screening updated successfully' });
  });
});

//update a theater
app.put('/update/theater', (req, res) => {
  const { TheaterID, NumofScreens, City, State, Address, ZipCode } = req.body;
  const sql = 'UPDATE theaters SET NumofScreens = ?, City = ?, State = ?, Address = ?, ZipCode = ? WHERE TheaterID = ?';
  db.query(sql, [NumofScreens, City, State, Address, ZipCode, TheaterID], (err) => {
    if (err) throw err;
    res.json({ success: true, message: 'Theater updated successfully' });
  });
});

//update a ticket
app.put('/update/ticket', (req, res) => {
  const { TicketID, SeatNum, ScreeningID, CustomerID } = req.body;
  const sql = 'UPDATE tickets SET SeatNum = ?, ScreeningID = ?, CustomerID = ? WHERE TicketID = ?';
  db.query(sql, [SeatNum, ScreeningID, CustomerID, TicketID], (err) => {
    if (err) throw err;
    res.json({ success: true, message: 'Ticket updated successfully' });
  });
});

//update a customer
app.put('/update/customer', (req, res) => {
  const { CustomerID, FirstName, LastName, Email } = req.body;
  const sql = 'UPDATE customers SET FirstName = ?, LastName = ?, Email = ? WHERE CustomerID = ?';
  db.query(sql, [FirstName, LastName, Email, CustomerID], (err) => {
    if (err) throw err;
    res.json({ success: true, message: 'Customer updated successfully' });
  });
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
