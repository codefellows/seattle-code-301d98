# Code Challenge Demo

```javascript
let people = ['John','Cathy','Allie','Zach'];

// For loops let us "break" away given a condition
for (let i = 0; i <= people.length-1; i++) {
  if (i === 2) {
    break;
  }
  console.log(people[i]);
}

// For loops let us "continue" (skip over an iteration) given a condition
for (let i = 0; i <= people.length-1; i++) {
  if (i === 2) {
    continue;
  }
  console.log(people[i]);
}

// In a function, you can return from a for loop...
function findIt(arr, pos = 0) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i === pos) {
      return arr[i];
    }
  }
  return null;
}
console.log( findIt(people,3) );


// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args
// It cannot "break", "continue" or "return"

people.forEach( function(item,idx) {
  console.log(item);
});

// ... or as an arrow function ...

people.forEach( (item,idx) => {
  console.log(item);
});

// ... or as a named function

let processor = (item,idx) => { console.log(item); };

people.forEach(processor);
```
