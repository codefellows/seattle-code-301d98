# array.reduce()

## Overview

`arr.reduce( (accumulator,value,index) => {...}, initialvalue)`

### Basics

`.reduce()` iterates over an array and returns the last version of the "accumulator" ... in each iteration, based on the value and/or idx of the current element in the array, you have the opportunity to modify and return the accumulator. After the last iteration of the array, that accumulator value is returned to the caller. `initialvalue` represents the value of the accumulator in the first iteration.

**Add up all the numbers in an array**
In this example, the accumulator starts out as 0 (the initial value) and for each iteration, we simply add onto it, and then return it.  That return value gets fed into the next iteration so that you can continually operate on it and return the final value.

```js
let numbers = [1,2,3,4];
let sum = numbers.reduce( function(accumulator,value,idx) {
  accumulator = accumulator + value;
  return accumulator;
}, 0);

// sum would be 10
```

**Change the shape of you data**
In this example, we'll take an array of objects and return back an object, keyed by the 'name' property. The initial value is an empty object, and as we iterate, we create a new entry in it, returning it as we build on.

```js
  let people = [
    {name:'Fred', role:'Developer'},
    {name:'Suzy', role:'Developer'},
    {name:'Gina', role:'Manager'},
    {name:'Jim', role:'Support'}
  ];
  
  let folks = people.reduce( (accumulator, person, idx) => {
    accumulator[person.name] = person.role;
    return accumulator;
  }, {} );
  
  // folks:
  {
    Fred: 'Developer',
    Suzy: 'Developer',
    Gina: 'Manager',
    Jim: 'Support'
  }
  
```

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Medium](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)
