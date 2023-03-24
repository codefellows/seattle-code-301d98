# Code Challenge Demo

```javascript
// array.map demo

const people = [
  { name: 'John', role: 'Dad' },
  { name: 'Cathy', role: 'Mom' },
  { name: 'Zach', role: 'Kid' },
  { name: 'Allie', role: 'Kid' },
];

const nums = [1,2,3,4,5,6,7];

for(let i = 0; i < nums.length; i++ ) {
  nums[i] = nums[i] * nums[i];
}

const squares = nums.map( (value) => {
  return { num: value, squared: value * value };
});

const addOne = nums.map(x=>x + 1);
```
