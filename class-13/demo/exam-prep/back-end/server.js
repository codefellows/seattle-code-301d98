'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const SnackHandlers = require('./snack-handlers')

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/snacks';

const app = express();

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose connected'));

/* routes
refer to routes.http for usage examples / manual tests
requires 'REST Client' extension (humao.rest-client)
*/
app.post('/snacks', SnackHandlers.create);
app.get('/snacks', SnackHandlers.getAll);
app.get('/snacks/:id', SnackHandlers.getOne);
app.put('/snacks/:id', SnackHandlers.update);
app.delete('/snacks/:id', SnackHandlers.delete);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
