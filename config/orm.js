const connection = require("./connection");

orm = {
  selectAll: function (table, cb) {
    connection.query("SELECT * FROM " + table, function (err, data) {
      if (err) { 
        console.log(err);
        return;
      } 
      cb(data);
    })
  },

  insertOne: function (table, insertData) {
    connection.query("INSERT INTO " + table + " SET ?", 
    {
      burger_name: insertData,
      devoured: 0
    }, 
    function(err, res) {
      if (err) throw (err);
    });
  },

  updateOne: function (table, updateData, updateType) {
    connection.query("UPDATE " + table + " SET ? WHERE ?", 
    [
      {
        devoured: updateType
      }, 
      {
        burger_name: updateData
      }
    ], function(err, res) {
      if (err) throw (err);
    });
  },
}

module.exports = orm;