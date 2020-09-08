orm = require("../config/orm");

burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function(res) { 
      cb(res) 
    });
  },
  insert: function(name) {
    orm.insertOne(name);
  },
  devour: function(id) {
    orm.updateOne(id);
  }
}

module.exports = burger;