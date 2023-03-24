const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/bookModel.js');

async function seed() {
  mongoose.connect(process.env.MONGO_URL);

  const HP1 = new Book({
    title:  'Harry Potter and the Sorcerer\'s Stone',
    description:   'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
    status: 'read',
    email: 'sara@codefellows.com'
    // change to your email
  });
  HP1.save(function (err) {
    if (err) console.error(err);
    else console.log('save hp1');
  });

  // alternately...
  await Book.create({
    title:  'Harry Potter and the Chamber of Secrets',
    description:   'Harry Potter\'s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby\'s sinister predictions seem to be coming true.',
    status: 'read',
    email: 'sara@codefellows.com'
    // change to your email
  });

  console.log('saved hp2');

  mongoose.disconnect();
}

seed();
