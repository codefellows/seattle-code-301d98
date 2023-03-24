# Code Challenge Demo

```javascript
// array.filter demo

const people = [
  { name: 'John', role: 'Dad' },
  { name: 'Cathy', role: 'Mom' },
  { name: 'Zach', role: 'Kid' },
  { name: 'Allie', role: 'Kid' },
];

const parents = people.filter(person => person.role !== 'Kid');
console.log(parents);

const nums = [1,2,3,4,5,6,7];
const evens = nums.filter( (num) => {
  return !(num % 2);
});
console.log(evens);
```
