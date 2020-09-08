const connection = require("./config/connection");
const orm = require("./config/orm");
const express = require("express");
const exphbs = require("express-handlebars");
const burger = require("./models/burger");

const PORT = process.env.PORT || 8080;

const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// log all burger names 
burger.selectAll(function (data) {
  for (x in data) {
    let status = "Not Devoured"
    if (data[x].devoured === 1) {
      status = "Devoured";
    }
    console.log(data[x].burger_name + " -- " + status);
  }
});

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});