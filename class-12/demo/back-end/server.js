const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Cat = require('./models/cat');

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json()); // new

mongoose.connect(process.env.MONGODB_URI);

// new
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});

app.get('/cats', async (request, response) => {

  const filterQuery = {};

  if (request.query.location) {
    filterQuery.location = request.query.location;
  }

  const cats = await Cat.find(filterQuery);

  response.send(cats);
});

app.post('/cats', async (request, response) => {

  try {

    // if request.body has everything you need in the right shape
    // then you can pass it straight to Model
    // But often you'll need to massage the data a bit

    const newCat = await Cat.create(request.body);
    response.send(newCat);

  } catch (error) {

    console.error(error);
    response.status(500).send('Error creating cat');
  }

});

app.delete('/cats/:id', async (request, response) => {
  const id = request.params.id;

  try {
    await Cat.findByIdAndDelete(id);
    response.status(204).send('success');
  } catch (error) {
    console.error(error);
    response.status(404).send(`Unable to delete cat with id ${id}`)
  }
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));


