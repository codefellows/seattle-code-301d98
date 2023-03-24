# array.sort()

## Overview

`array.sort( [compareFunction] )` sorts an array in place -- mutating the array. There is no return value.

The `compareFunction` is a function that is used by sort to evaluate sibling values in turn, and sort in the appropriate order.

- If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
- If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. 
- If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.

### Compare Function Setup

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

```

### Sample Compare Function
```
function compareNumbers(a, b) {
  return a - b;
}
```

### In actual code ...
```
function compareNumbers(a, b) {
  return a - b;
}

let array = [1,6,4,2,8,11,4,99,129];
array.sort(compareNumbers);

// Or all in line:
array.sort( (a,b) => { 
  return a-b; 
});

```

### Caveats and Notes
- The speed and technique of the sort functionality internally is determined by JavaScript, so you can't depend on a consistent "complexity" or "time"
- compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

## Reference
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
