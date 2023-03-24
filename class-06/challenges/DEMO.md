# Code Challenge Demo

```javascript

// Define variables set to primitive data values.`
let name = 'Rey';
let age = 20;
let isJedi = true;

// assign one variable equal to another variable!
// setting variables to primitive values creates a separate memory address with their own value.
// AKA Pass By Value.
let favoritePilot = name;
console.log('Same value for both variables', name, favoritePilot);

// we can change each variables values discreetly since they point to different places in memory.
name = 'Vader';
console.log('Different values since each variable is a primitive', name, favoritePilot);

// setting variable equal to Non-primitive object literal.
const pilot = {
  name: 'Luke',
  age: 21,
  isJedi: true
}

// setting another variable to the Non-primitive variable.
// this skips the assigning of a new memory address, and just passes the old "reference" to the same address to the other variable.
favoritePilot = pilot;

// same addresses mean same value for both variables.
pilot.name = "Vader";
console.log("Changing pilot should also change favoritePilot", pilot, favoritePilot);

// Regardless of the type of mutation (updating or deleting), we are still modifying the same object in memory.
delete pilot.age;
console.log(pilot, favoritePilot);

favoritePilot.age = 50;
// we see again that using the other variable still updates the same object in memory.
console.log(pilot, favoritePilot);

// Also Non-primitive data type variable.
const people = ["Luke", "Dorovio", "Porkins", "Tallie", "Han", "Rey"];
const pilots = people;

console.log("People and pilots before mutation:", people, pilots);

pilots.push("Vader");
console.log("After our mutation", people, pilots);;
// since non-primitives are passed by "reference", both pilots and people are referencing the same value in memory.


// Even if we use bracket notation to set index positions, we still reference the same object.
for (let i = 0; i < people.length; i++) {
  people[i] = people[i].toUpperCase();
}
console.log('Now both variables have their values mutated', people, pilots);

```
