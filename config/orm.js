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

  insertOne: function (insertData) {
    connection.query("INSERT INTO burgers SET ?", 
    {
      burger_name: insertData,
      devoured: false
    }, 
    function(err, res) {
      if (err) throw (err);
    });
  },

  updateOne: function (updateData) {
    connection.query("UPDATE burgers SET ? WHERE ?", 
    [
      {
        devoured: true
      }, 
      {
        id: updateData
      }
    ], function(err, res) {
      if (err) {
        console.log(err)
        return;
      };
    });
  },
}

module.exports = orm;