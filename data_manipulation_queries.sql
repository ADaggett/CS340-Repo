-- Data Manipulation Queries (draft 1 will add more)

-- Retrieve all Theater IDs and Names to populate a dropdown
SELECT TheaterID, TheaterName FROM Theaters;

-- Retrieve all customers and their emails for the List Customers page
SELECT CustomerID, FirstName, LastName, Email FROM Customers;

-- Retrieve all screenings and their movie titles for the List Screenings page
SELECT ScreeningID, ScreeningTime, ScreenNum, Theaters.TheaterName, Movies.Title 
FROM Screenings 
INNER JOIN Theaters ON Screenings.TheaterID = Theaters.TheaterID 
INNER JOIN Movies ON Screenings.MovieID = Movies.MovieID;

-- Retrieve all movies for the List Movies page
SELECT MovieID, Title, Duration, Genre, ReleaseDate, Rating FROM Movies;

-- Retrieve a single customer's data for the Update Customer form
SELECT CustomerID, FirstName, LastName, Email 
FROM Customers 
WHERE CustomerID = :CustomerID;

-- Retrieve all screenings for a specific theater to populate a dropdown
SELECT ScreeningID, ScreeningTime, ScreenNum 
FROM Screenings 
WHERE TheaterID = :TheaterID;

-- Retrieve all tickets for a specific screening
SELECT TicketID, SeatNum, Customers.FirstName, Customers.LastName 
FROM Tickets 
INNER JOIN Customers ON Tickets.CustomerID = Customers.CustomerID 
WHERE ScreeningID = :ScreeningID;

-- Add a new customer
INSERT INTO Customers (FirstName, LastName, Email) 
VALUES (:FirstNameInput, :LastNameInput, :EmailInput);

-- Add a new ticket
INSERT INTO Tickets (SeatNum, ScreeningID, CustomerID) 
VALUES (:SeatNumInput, :ScreeningIDInput, :CustomerIDInput);

-- Add a new screening
INSERT INTO Screenings (ScreeningTime, TheaterID, ScreenNum, MovieID) 
VALUES (:ScreeningTimeInput, :TheaterIDInput, :ScreenNumInput, :MovieIDInput);

-- Update a customer's data based on the Update Customer form
UPDATE Customers 
SET FirstName = :FirstNameInput, LastName = :LastNameInput, Email = :EmailInput 
WHERE CustomerID = :CustomerID;

-- Delete a customer
DELETE FROM Customers 
WHERE CustomerID = :CustomerID;

-- Delete a ticket
DELETE FROM Tickets 
WHERE TicketID = :TicketID;
