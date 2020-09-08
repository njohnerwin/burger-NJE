const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.devour(req.params.id);
  return res.status(200).end();
});

router.post("/api/burgers", function(req, res) {
  burger.insert(req.body.burger_name);
  return res.status(200).end();
})

  /*console.log("condition", condition);
  
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });*/

module.exports = router;

