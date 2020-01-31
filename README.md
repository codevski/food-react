<h1 align="center">Food React</h1>

<div align="center">
  <strong>Code Challenge</strong>
</div>
<div align="center">
  Simple React + Express + <code>GraphQL</code> Project
</div>

<br />

<div align="center">
  <!-- Node version -->
  <a href="#">
    <img src="https://img.shields.io/node/v/discord.js"
      alt="NPM version" />
  </a>
  <!-- Code Style -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Coding Style" />
  </a>
</div>

<div align="center">
  <sub>The little project that could. Built with ❤︎ by
  <a href="https://twitter.com/codevski">Codevski</a>
</div>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Constraints](#constraints)
- [Feature](#feature)
- [Install](#install)

>Due to time constraints structure and design decisions were made just to fulfill requirements.

## Constraints
- __Dashboard:__ Cleaner Dashboard
- __Validation:__ More validation with user inputs
  - minimal validations have been added for example (qty cannot be 0)
- __Database:__ Simple JSON file was used so a more complex data structure would of been idea
- __Cart Management:__ Ability to manage cart (add / remove)
- __Frontend Structure:__ A much cleaner frontend structure, more use of HOC and cleaner routing would of been ideal
- __Test Coverage:__ More test could of been added.
  - __GraphQL__: Test the graphql endpoint
    - Handle graphql error tests
    - Verify the data return are as expected
  - __Data Validation:__ Test that the data is valid
  - __Error Handling:__ Test different error handlers

## Feature
- __GraphQL:__ Graphql was used over REST.
## Install
Before you begin; install the dependencies by running `npm install`.

Once the dependencies have been installed you'll have a few commands available:

- `npm start`  : Will start the React/Express services
  - React port: 3000
  - Express port: 8080
- To run server tests it requires server to be running
  - `npm run start:server` : To start the server and in another instance run:
  - `npm run test:server` : To start GraphQL tests
