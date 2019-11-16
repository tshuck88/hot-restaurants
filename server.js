var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    customerName: "sdf",
    phoneNumber: "sdfsd",
    customerEmail: "sdfsdf",
    customerID: "sdsdf"
  },
  {
    customerName: "sdf",
    phoneNumber: "sdfsd",
    customerEmail: "sdfsdf",
    customerID: "sdsdf"
  },
  {
    customerName: "sdf",
    phoneNumber: "sdfsd",
    customerEmail: "sdfsdf",
    customerID: "sdsdf"
  },
  {
    customerName: "sdf",
    phoneNumber: "sdfsd",
    customerEmail: "sdfsdf",
    customerID: "sdsdf"
  }
];
const waitList = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.post("/api/tables", function(req, res) {
  const newReservation = req.body;
  console.log(newReservation);
  if (reservations.length < 5) {
    reservations.push(newReservation);
    res.json(newReservation);
  } else {
    waitList.push(newReservation);
    res.json(null);
  }
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
