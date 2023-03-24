const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const cors = require('cors');

app.use(cors());
app.use(express.json()); // needed to parse request body

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Cat = require('./models/cat');

// all cats
app.get('/cats', async (req, res) => {

  const cats = await Cat.find({});

  res.send(cats);
});

// one cat, by id
// NOTE: not using this on front end at the moment,
// but it's common to have in a complete API
app.get('/cats/:id', async (req, res) => {

  const cat = await Cat.findById(req.params.id);

  res.send(cat);
});

// create a cat
app.post('/cats', async (req, res) => {

  const { name, color, hasClaws } = req.body;

  const newCat = await Cat.create({ name, color, hasClaws });

  res.send(newCat);
});

// delete a cat
app.delete('/cats/:id', async (req, res) => {

  await Cat.findByIdAndDelete(req.params.id);

  res.send('success!');
});

// update a cat
app.put('/cats/:id', async (req, res) => {
  const { name, color, hasClaws } = req.body;
  const updatedCat = await Cat.findByIdAndUpdate(req.params.id, { name, color, hasClaws }, { new: true, overwrite: true });
  res.send(updatedCat);
});

app.listen(3001, () => console.log('app listening on 3001'));
