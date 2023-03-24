# Nested For Loops

## Overview

We can use nested for loops to iterate over each element in another array.

For example, say you had a group of people, and you wanted to everyone to take turns shaking everyone's hand (other than themselves, of course).

Visualize people sitting in a row.  The first person stands up, walks in front and shakes each of the other's hands, and then sits down at the end of the row. Then the next person gets up and does the same thing ... until everyone has gone through the process ...

```js
let shakeHands = list => {
  for( let i = 0; i <= list.length - 1; i++ ) {
    // Person i will look at each person in the list:
    for( let j = 0; j <= list.length - 1; j++ ) {
      if(list[i] !== list[j]) {
        console.log(`${list[i]} shakes ${list[j]}'s hand.`);
      }
    }
  }
};

let people = ['Kookla', 'Fran', 'Ollie'];

shakeHands(people);

// Output:
Kookla shakes Fran's hand
Kookla shakes Ollie's hand
Fran shakes Kookla's hand
Fran shakes Ollie's hand
Ollie shakes Kookla's hand
Ollie shakes Fran's hand

```

Alternatively, you can have 2 different arrays that loop over each other. Here, we'll create a simple grid, like a tic-tac-toe board.  First we'll iterate over the 'height' which creates the rows, and then over the 'width', to create the columns.

```js
let drawGrid = (height,width) => {
  for(let i = 1; i <= height; i++) {
    let row = [];
    let char = i === height ? ' ' : '_'; // On the bottom row, we need to use spaces instead of "_"
    for(let j = 1; j <= width; j++) {
      row.push(char);
    }
    console.log(row.join('|')); // Combine the cell characters with a column separator
  }
};
drawGrid(3,,3)

// Output:

_|_|_
_|_|_
 | |

```

### Caveats and Notes

- Looping an array over itself like the first example can lead to massive performance problems!
- Make sure that in your nested loops that you use unique and meaningful variable names.

### 2 Dimensional Arrays

One practical application of using nested for loops is working with multi-dimensional arrays.

If that sounds scary, fear not! The wording may be unfamiliar to you, but the code is very similar to what you already know.

A 2 Dimensional array is simply an array whose elements are also arrays.

It is an array of arrays. That is, a list of lists. A box containing boxes that contain items.

```js
let a = [ [2,4,6,8], [1,3,7,9], [4,3,8,6] ];

// Many people visualize this as a grid, thinking of it as rows and columns...

let a = [
  [2,4,6,8],
  [1,3,7,9],
  [4,3,8,6]
];
```

Lets loop over that and print out the grid ... the outer loop represents the elements in the array `a`, while the inner loop represents each item in the array found at each position in `a`

```js
let drawTable = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    let line = '';
    for(let j = 0; j <= table[i].length - 1; j++){
      line = line + table[i][j];
    }
    console.log(line);
  }
};
drawTable(a);

// Output:

  2468
  1379
  4386
```

In this example, we'll try and figure out which items in the arrays "touch" each other.  Look at the output from the previous example, and think about which numbers touch which each other (vertically, horizontally, and diagonally) when you visualize it as that grid.  By analyzing which are one above or below and one left or right, we can loop through and figure this out.

```js
let touches = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    for(let j = 0; j <= table[i].length - 1; j++){
      let touches = [];
      for(let x = i - 1; x <= i + 1; x++) {
        for(let z = j - 1; z <= j + 1; z++) {
          // The continue statement "jumps over" one iteration in the loop.
          if(x === i && j === z) {continue;} // skip yourself
          table[x] && table[x][z] && touches.push(table[x][z]);
        }
      }
      console.log(`${table[i][j]} touches ${touches}`);
    }
  }
};

touches(a);

// OUTPUT:

    2 touches 4,1,3
    4 touches 2,6,1,3,7
    6 touches 4,8,3,7,9
    8 touches 6,7,9
    1 touches 2,4,3,4,3
    3 touches 2,4,6,1,7,4,3,8
    7 touches 4,6,8,3,9,3,8,6
    9 touches 6,8,7,8,6
    4 touches 1,3,3
    3 touches 1,3,7,4,8
    8 touches 3,7,9,3,6
    6 touches 7,9,8

```
