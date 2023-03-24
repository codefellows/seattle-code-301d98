# Code Challenge Demo

```javascript
let arr = ['a','b','c','d','e'];

// SLICE - Find elements in the array
// Does not modify
// Identify the start index, and the end index (optional)

// Find 2 elements starting at position 0
console.log( 'slice(0,2)', arr.slice(0,2) );

// Find 2 elements starting at position 2
console.log( 'slice(2,2)', arr.slice(2,4) );

// Find 1 elements starting at position 4
console.log( 'slice(3,4)', arr.slice(3,4) );

// Find 1 elements starting at position 0
console.log( 'slice(0,1)', arr.slice(0,1) );

// Find the last element
console.log( 'slice(arr.length-1)', arr.slice(arr.length-1) );

// 2 from the front to the end ...
console.log( 'slice(2)', arr.slice(2) );

// 2 from the end to the front ...
console.log( 'slice(-2)', arr.slice(-2) );



// SPLICE - Insert/Remove elements in the array
// Alters the original array


// At arr index 1, replace 0 elements with 99
// This will INSERT a new element into the array
arr.splice(1,0,99)
console.log('splice(1,0,99)', arr);

// At arr index 1, replace 1 element with nothing
// This will DELETE an array element at a particular index
arr.splice(1,1)
console.log('splice(1,1)', arr);

// At arr index 2, replace 3 elements with 99
// This will shorten the array, but add a new value
arr.splice(2,3,99)
console.log('splice(2,3,99)', arr);



// JOIN -- Creates a string from an array, with the join char as a separator.
arr = ['this','was','fun']
console.log( arr.join() ); // commas will be the default
console.log( arr.join('') ); // one long word
console.log( arr.join('.') ); // millennial advertising
console.log( arr.join('-') ); // kebab case
console.log( arr.join('_') ); // snake case


 // SPLIT -- Creates an array from a string, with each element being created from the matched value (and nuking that value)
let str = 'This is a really cool thing';
let words = str.split(' ');
console.log(words);

let iii = str.split('i');
console.log(iii);
```
