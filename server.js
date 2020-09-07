const connection = require("./config/connection");
const orm = require("./config/orm");
const express = require("express");
const burger = require("./models/burger");

const result = 

//log how many are not devoured (devoured = 0) 
console.log();

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



