'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Read in the shopping list from our "Database" (flat file)
const data = require('./shopping-list.json');

const app = express();

// middleware
app.use(cors());

const PORT = process.env.PORT || 3001;

// This class will be used to fulfill requests for shopping lists later.
class List {

  // Run the request through a constructor, use the type to find the correct list.
  // what is a List?  An object with `type` and `itemValues` properties.
  constructor(type = 'food') {
    if (typeof type !== 'string') throw new Error('List type error');
    let { listName, items } = data.lists.find(list => list.listName === type) || {listName: null, items: []};
    this.type = listName;
    this.itemValues = items;
  }

  // What are Items defined as on our App?  Just on object with name and description properties.
  getItems() {
    return this.itemValues.map(item => ({
      name: item.name,
      description: item.description
    }));
  }
}

app.get('/', (request, response) => {
  response.send('hello from the home route!');
});

app.get('/bananas', (request, response) => {
  response.json({ 'bananas': 'are cool' });
});

app.get('/shoppingList', (request, response) => {
  const type = request.query.type;
  console.log('Query Params', request.query);
  console.log('Type:', type);

  const shoppingList = new List(type);
  const listItems = shoppingList.getItems();
  response.status(200).send(listItems);
});

app.get('/throw-an-error', (request, response) => {
  // When something bad happens, you can "throw" an error and the
  // error handler middleware will catch and handle it
  throw new Error('You did something really, really bad!');
});

// When you use a try-catch and an error "just happens" in your code,
// use the 'catch' to call upon the error handler and give the user something useful
app.get('/async-error', (request, response, next) => {
  try {
    // we are generating an error on purpose
    // This should cause an error that'll end up in the catch() below
    let listException = new List(1337);
    let badListItems = listException.getItems();
    response.send(badListItems);
  } catch (error) {

    // next can be used to pass an error to express for the error middleware to handle
    next(error);

    // THESE are anti-patterns. DO NOT handle errors inline, this is not the Express way
    // response.status(500).send('error from async-error');
    // response.status(500).send(error.message);
  }
});

// Not Found
app.get('*', (request, response) => {
  response.status(404).send('not found');
});

// error handling middleware must be the last app.use()
app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
