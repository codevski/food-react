test.todo("Test File Storage");
test.todo("Input Validation");
test.todo("Error Handling");

const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:8080`;
const request = require('supertest')(url);

describe('GraphQL', () => {
    it('Response returns coffee item name', (done) => {
        request.post('/graphql')
            .send({ query: ' { product(id: "1") { name } }' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.data.product.name).to.equal('Coffee');
                done();
            });
    });
});