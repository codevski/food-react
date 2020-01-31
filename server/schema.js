const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

  type Product {
    id: ID
    name: String
    price: Float
    description: String
    image: String
    type: String
  }

  type Food {
    id: ID
    name: String
    price: Float
    description: String
    image: String
    extra: Extra
  }

  type Drink {
    id: ID
    name: String
    price: Float
    description: String
    image: String
    size: [Size]
  }

  type Size {
    size: String
    price: Float
  }

  type Milk {
    type: String
    price: Float
  }

  type Extra {
    name: String
    price: Float
  }

  type CartItem {
    id: ID
    item: String
    price: Float
    qty: Int
  }

  type Query {
    getDrinks: [Drink]
    getFood: [Food]
    getSizes: [Size]
    getType(type: String): [Product]

    getProducts: [Product]
    getExtra: [Extra]
    getMilk: [Extra]

    # Ability to search for a individual item with a valid ID
    drink(id: String): Drink
    food(id: String): Food
    product(id: String): Product
  }

  type Mutation {
    # Ability to add Food within the system
    AddFood(
      name: String!
      price: String
      description: String
      image: String
    ): Food
    AddCart(id: ID, item: String, price: Float, qty: Int): CartItem
  }
`;

module.exports = typeDefs;
