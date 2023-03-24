'use strict';
const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

const SnackModel = mongoose.model('snack', snackSchema);

module.exports = SnackModel;
