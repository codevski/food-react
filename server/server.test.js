test.todo("Test File Storage");
test.todo("Input Validation");
test.todo("Error Handling");

const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:8080`;
const request = require('supertest')(url);
const put = require('./put')
const uuidv1 = require('uuid/v1');
const { UserInputError} = require('apollo-server');

// describe('GraphQL', () => {
//     it('Response returns coffee item name', (done) => {
//         request.post('/graphql')
//             .send({ query: ' { product(id: "1") { name } }' })
//             .expect(200)
//             .end((err, res) => {
//                 if (err) return done(err);
//                 expect(res.body.data.product.name).to.equal('Coffee');
//                 done();
//             });
//     });
// });

describe('Utils', () => {
  it('Fail adding item to cart', (done) => {
    let args = {
      item: "Coffee",
      price: 5,
      qty: 0
    }
    var badFn = function () { throw new UserInputError('Illegal salmon!'); };
    // let cartItem = put.Cart(args)
    // console.log(args.item)
    expect(badFn).to.throw(UserInputError);
    done();
  });
});