# Code Challenge Demo

```javascript
let person =
  {
    'name':'John',
    'role':'Dad',
    'interests': ['Coaching','Teaching'],
  };

console.log(person.name);

// for ... in
for( let property in person ) {
  console.log(property, person[property]);
}

// Object.keys
let properties = Object.keys(person);
properties.forEach( property => {
  console.log(property, person[property]);
});

Object.keys(person).forEach( property => {
  console.log(property, person[property]);
});

// Object.values
console.log(Object.values(person));

Object.values(person).forEach(value => {
  console.log(value);
});

// Object.entries
Object.entries(person).forEach(entry => {
  console.log(entry);
});
```
