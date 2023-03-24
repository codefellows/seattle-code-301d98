# array.filter()

## Overview

Similar to `array.map()`, the `array.filter()` function iterates over an array and runs a callback for each element. The callback receives the value and the index of the array element as a parameter.

`.filter()` will always return you a **new array**, comprised of elements from the original array that match your criteria -- which elements in the array match the filter condition?

### Even Numbers

```js
  let numbers = [2,3,4,5];
  
  let evens = numbers.filter( function(n,i) {
    return !(n % 2);
  });
  
  // or as a snazzy arrow function ...
  // let evens = numbers.filter( n => !(n % 2) );
  
  console.log(evens); // [ 2, 4, 6 ]

```

### Object Values

```js
  let people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
  ];

  let parents = people.filter(person => person.role !== "Kid");
  console.log(parents);
   // [ { name:'John' ... }, {name:'Cathy', ...} ]

```

**If you do nothing** ... you'll get back an empty array

```js
  let numbers = [2,3,4,5];
  
  let evens = numbers.filter( function(n,i) {
  });
  
  console.log(evens); // []
  
```

### Caveats and Notes

- The original array is never mutated
- You always get back a new array
- The array returned is built by pushing values that evaluate & return `true`

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter){:target="_blank"}
- [Medium](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c){:target="_blank"}
