# Code Challenge Demo

```javascript
// Nested for loops:
/*******************/

// Everybody Greets Everybody ...
let people = ['John', 'Cathy', 'Zach', 'Allie'];

// In this function, we loop over the people and then for each person, we loop over the same list of people. In this "inner loop", the person in the outer loop can "see" each person, including themselves. They will shake the hand of the person they are paired with, if it's not themselves.

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

shakeHands(people);

// Tic Tac Toe Grid
let drawGrid = (height, width) => {
  for(let i = 1; i <= height; i++) {
    let row = [];
    let char = i === height ? ' ' : '_'; // Separate rows with bottom border, so last row doesn't need it
    for(let j = 1; j <= width; j++) {
      row.push(char);
    }
    console.log(row.join('|')); // Combine the cell characters with a column separator
  }
};
drawGrid(7,7);

// 2 Dimensional Arrays
/**********************/

// Pretty Print and Show Neighbors
let a = [
  [2,4,6,8],
  [1,3,7,9],
  [4,3,8,6],
];

// Iterate over an array of arrays.
// The outer loop represents each item in the array "a"
// The inner loop represents each item in the array found at each position in "a"
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

// This function takes drawing the table a step further.
// Here, we still iterate the outer and inner arrays.
// The difference is that once on the inner array, we look at every possible neighbor, by looking a row above us, our current row, and a row below us (i-1 ... i+1) as well as the columns to our left & right (j-1 and j+1)
let touches = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    for(let j = 0; j <= table[i].length - 1; j++){
      let touches = [];
      for(let x = i - 1; x <= i + 1; x++) {
        for(let z = j - 1; z <= j + 1; z++) {
          if(x === i && j === z) {continue;}
          table[x] && table[x][z] && touches.push(table[x][z]);
        }
      }
      console.log(`${table[i][j]} touches ${touches}`);
    }
  }
};

touches(a);
```
