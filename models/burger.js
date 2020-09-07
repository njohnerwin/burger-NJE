orm = require("../config/orm");

burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function(res) { cb(res) });
  },
  insert: function(name, cb) {
    orm.insertOne("burgers", name);
    cb(true);
  },
  devour: function(name, cb) {
    orm.updateOne("burgers", name, 1);
    cb(true);
  }
}

module.exports = burger;