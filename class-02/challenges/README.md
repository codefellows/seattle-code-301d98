# array.map()

## Overview

`array.map( fn(v,i) {} )` Much like`array.forEach()`, the `array.map()` function iterates over an array and runs a call back for each element. The callback receives the value and the index of the array element as a parameter.  

The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

### Squaring a number

```js
  let numbers = [2,3,4,5];
  
  let squares = numbers.map( function(n,i) {
    return n * n;
  });
  
  // or as a snazzy arrow function ...
  // let squares = numbers.map( n => n * n );
  
  console.log(squares); // [ 4, 9, 16, 25 ]

```

### Changing the data shape

```js
  let people = [
    { name: "John", role: "Dad" },
    { name: "Cathy", role: "Mom" },
    { name: "Zach", role: "Kid" },
    { name: "Allie", role: "Kid" },
  ];
  
  let folks = people.map( (person,i) => {
    return person.name;
  });
  
  console.log(folks); // [ "John", "Cathy", "Zach", "Allie" ]

```

**If you do nothing...**

```js
  let numbers = [2,3,4,5];
  
  let squares = numbers.map( function(n,i) {
  });
  
  console.log(squares); // [undefined, undefined, undefined, undefined]
  
```

### Caveats and Notes

- The original array is never mutated
- You always get back a new array
- The array returned is always the same length as the original

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map){:target="_blank"}
- [Medium](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c){:target="_blank"}
