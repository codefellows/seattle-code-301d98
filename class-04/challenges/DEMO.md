# Code Challenge Demo

```javascript
/*
If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
 */
const numbers = [5,1,3,9,11,100,87,44,23,67];
numbers.sort( (a, b) => {
  return !(a % 2);
});

numbers;

const people = [
  {name:'Fred', role:'Developer'},
  {name:'Suzy', role:'DevEloper'},
  {name:'Gina', role:'Manager'},
  {name:'Jim', role:'Support'},
];

const newPeople = people.sort( (a,b) => {
    if(a.name.toUpperCase() < b.name.toUpperCase()){
      return 1;
    } else {
      return -1;
    }
  }
);

// refactor as a ternary
const newPeople = people.sort( (a,b) => {
  return a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1;
})

// or, better yet, as a one liner ternary
const newPeople = people.sort( (a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1);

newPeople;
people;
```
