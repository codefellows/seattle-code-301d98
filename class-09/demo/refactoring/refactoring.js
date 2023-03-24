'use strict';

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.getName = function () { return this.name; };

let person = new Person('Fred', 51);

// bad code -- references the same thing over and over
function sayName(person) {
  if (person.age >= 50) {
    return person.getName().toUpperCase();
  } else {
    return person.getName().toLowerCase();
  }
}

console.log(sayName(person));

// better -- cache a reference to it, just once
// Seems small, but calling functions is harder on the server than a variable lookup.

function sayNameBetter(person) {
  let name = person.getName();
  if (person.age >= 50) {
    return name.toUpperCase();
  } else {
    return name.toLowerCase();
  }
}

console.log(sayNameBetter(person));

// even better -- use a ternary

function sayNameEvenBetter(person) {
  let name = person.getName();
  return person.age >= 50 ? name.toUpperCase() : name.toLowerCase();
}

console.log(sayNameEvenBetter(person));

// Promises - Ugly
function doSomethingAsync(person) {
  return Promise.resolve(person);
}

doSomethingAsync(person)
  .then(data => {
    data.name = data.name.toUpperCase();
    console.log('ugly upper', data.name);
    return data;
  })
  .then(differentData => {
    differentData.name = differentData.name.toLowerCase();
    console.log('ugly lower', differentData.name);
  });


// Promises Better
doSomethingAsync(person)
  .then(data => changeNameToUpper(data.name))
  .then(name => print(name))
  .then(name => changeNameToLower(name))
  .then(name => print(name));

function changeNameToUpper(name) {
  return name.toUpperCase();
}

function changeNameToLower(name) {
  return name.toLowerCase();
}

function print(words) {
  console.log('pretty', words);
  return words;
}