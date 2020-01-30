// GraphQL used instead of REST
// exports.list = function(req, res){
//   res.json("List of products");
// };
const { find, union, filter } = require('lodash');
const uuidv1 = require('uuid/v1');
const { UserInputError} = require('apollo-server');
var fs = require('fs');
var path = require("path");
const db = require('./db');

module.exports = {
  Products: function (id) {
    // whatever
    return union(db.products.food, db.products.drinks)
  },

  Drinks: function () {
    return db.products.drinks
  },
  Type: function (type) {
    return filter(union(db.products.food, db.products.drinks), { type })
  },

  Food: function () {
    return db.products.food
  },

  Milk: function () {
    return db.drinkOptions.milk
  },

  Extra: function () {
    return db.foodOptions.extra
  },

  Sizes: function () {
    return db.drinkOptions.sizes
  },

  Item: function(id) {
    return find(union(db.products.food, db.products.drinks), { id })
  }
};