const { ApolloServer } = require('apollo-server-express');
var path = require('path');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
var list = require('./list');

const bodyParser = require("body-parser");
const express = require("express");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))
// list all
// app.get('/api/list', list.list);

app.get("/api/ping", (req, res) => res.json("pong"));
app.listen(port, () => console.log(`Listening on port ${port}`));
