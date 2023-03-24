const mongoose = require('mongoose');
const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
});

// make a model out of the schema
const Cat = mongoose.model('Cat', catSchema);

// export the model
module.exports = Cat;
