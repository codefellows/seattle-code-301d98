# Array and String Methods

Fun with `slice()`, `splice()`, `split()`, `join()`!

## Overview

**split()** -- Turning Strings into arrays
Using the `split(separator)` method on a string will quickly parse the string finding every instance of the `separator` character(s) that you identify, and where it finds them, "split" the string at that point and create an array element.

- The string is not modified
- The `separator` characters is removed as the string is "split" up based on it...

```javascript
let str = 'This is a really cool thing';
let words = str.split(' ');
console.log(words);
  // prints out: [ 'This', 'is', 'a', 'really', 'cool', 'thing' ]

let iii = str.split('i');
console.log(iii);
  // prints out: [ 'Th', 's ', 's a really cool th', 'ng' ]
```

**join()** -- Turning arrays into strings
The `join(char)` array method will iterate an array and create a string by concatenating the value of each element in the array with the `char` that you specify.

- The original array is not modified
- Given no `char`, join() will insert commas.

```javascript
let arr = ['this','was','fun']
console.log( arr.join() ); // commas will be the default
  // prints out: this,was,fun

console.log( arr.join('') ); // one long word
  // prints out: thiswasfun

console.log( arr.join('.') ); // millennial advertising
  // prints out: this.was.fun.

console.log( arr.join('-') ); // kebab case
  // prints out: this-was-fun

console.log( arr.join('_') ); // snake case
  // prints out: this_was_fun
```

**slice()** -- Find elements within an array

- The array is not modified
- Identify the start index and the end index (optional)
- Positive indexes start at the front of the array, negatives start at the end.

```javascript
let arr = ['a','b','c','d','e'];

// Find 2 elements starting at position 0
console.log( arr.slice(0,2) );
  // output: [ 'a', 'b' ]

// Find 2 elements starting at position 2
console.log( arr.slice(2,4) );
  // output: [ 'c', 'd' ]

// Find 1 elements starting at position 4
console.log( arr.slice(3,4) );
  // output: [ 'd' ]

// Find 1 elements starting at position 0
console.log( arr.slice(0,1) );
  // output: [ 'a' ]

// Find the last element
console.log( arr.slice(arr.length-1) );
  // output: [ 'e' ]

// 2 from the front to the end ...
console.log( arr.slice(2) );
  // output: [ 'c', 'd', 'e' ]

// 2 from the end to the front ...
console.log( arr.slice(-2) );
  // output: [ 'd', 'e' ]

```

**splice()** -- replace parts of an array with new values

- The array IS modified
- 3 parameters: Start Index, # of Elements to Remove, Replacement Value

```javascript
let arr = ['a','b','c','d','e'];

// At arr index 1, replace 0 elements with 99
// This will INSERT a new element into the array
arr.splice(1,0,99)
console.log(arr);
  // output: [ 'a', 99, 'b', 'c', 'd', 'e' ]

// At arr index 1, replace 1 element with nothing
// This will DELETE an array element at a particular index
arr.splice(1,1)
console.log(arr);
  // output: [ 'a', 'b', 'c', 'd', 'e' ]

// At arr index 2, replace 3 elements with 99
// This will shorten the array, but add a new value
arr.splice(2,3,99)
console.log(arr);
  // output: [ 'a', 'b', 99 ]
```

## Reference and Resources

- [MDN - String Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [MDN - Array Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [MDN - Array Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [MDN - String Split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN - Array Join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
