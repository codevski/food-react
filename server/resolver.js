const { find } = require('lodash');
const list = require('./list')
const put = require('./put')
const db = require('./db');

// Provide resolver functions for the schema fields
const resolvers = {
  Query: {
    // List Queries
    getType: (_, { type }) => list.Type(type),
    getProducts: () => list.Products(),
    
    // Query Options
    getSizes: () => list.Sizes(),
    getExtra: () => list.Extra(),
    getMilk: () => list.Milk(),

    // Ability to Query individual items
    drink: (_, { id }) => find(db.products.drinks, { id }),
    food: (_, { id }) => find(db.products.food, { id }),
    product: (_, { id }) => list.Item(id),
  },

  Mutation: {
    AddCart: (parent, args) => { put.Cart(args); console.log(args)}
  },
}

module.exports = resolvers;