orm = require("../config/orm");

burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function(res) { cb(res) });
  }
}

module.exports = burger;