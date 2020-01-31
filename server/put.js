const uuidv1 = require('uuid/v1');
const { UserInputError} = require('apollo-server');
var fs = require('fs');
var path = require("path");

module.exports = {
  Cart: function (args) {
    const cart = {
      id: uuidv1(),
      item: args.item,
      price: args.price,
      qty: args.qty
    }
    if (!args.qty || args.qty < 1) {
      throw new UserInputError('QTY Must be greater than 1', {
        invalidArgs: Object.keys(args),
      });
    }

    // Reason server restarts after adding cart due to nodemon 
    // detecting file changes. This complete process wouldn't exist 
    // if a databse was being used.
    fs.readFile(path.resolve(__dirname, "./db.json"), function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
        
        var json = JSON.parse(data)

        json.cart.push(cart)

        fs.writeFile(path.resolve(__dirname, "./db.json"), JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });
  }});
    return cart
  }
};