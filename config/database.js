require("dotenv").config();
const mongoose = require("mongoose");
const { connect, connection } = require("mongoose");
// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Database connection
connect(process.env.MONGO_URI, {
  // Having these two properties set to true is best practice when connecting to MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// This line of code will run the function below once the connection to MongoDB has been established.
connection.once("open", () => {
  console.log("connected to mongo");
});
// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected"));
db.on("close", () => console.log("mongo disconnected"));

module.exports = db;
