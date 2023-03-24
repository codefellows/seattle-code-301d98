# Array.forEach

## Overview
`Array.forEach` allows you to iterate through an array. Where a normal `for` loop is "iterative", forEach is more declarative or functional in nature.

It is implemented as a method on your array instance.
```
  let myArray = ['a', 'b', 'c'];
  myArray.forEach( ... )
```

It takes a callback as a parameter, which in turn receives the value and the iterator, and runs it on every element.

```
  let myArray = ['a','b','c'];

  myArray.forEach( function(value, i) {
    console.log(i);       // 0, 1, 2
    console.log(value);   // a, b, c
  })
```

## Caveats and Notes
- Applies the callback to each element
- You cannot "Return" a value
- You cannot "break" or "continue" as you can with a for loop
- By default, forEach does not mutate the array
- If you mutate it in process, you will have interesting issues

## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [ForEach vs For](https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2)
