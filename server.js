var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [{ name: "test" }];
const waitList = [{ name: "test1" }];

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
  return res.json(tables);
});

app.post("/api/waitList", function(req, res) {
  const newReservation = req.body;
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newCharacter);
  characters.push(newCharacter);
  res.json(newCharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
