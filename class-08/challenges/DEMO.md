# Code Challenge Demo

```javascript
let str = 'the rain in spain falls mainly in the plain';

let regex = /[A-Z]/g;
regex = /s.?([A-Za-z]in)\s+/g;

let wordSeparators = /\W/g;
let firstLetters = /\b(\w)/g;

console.log(str.match(/([A-Za-z]in)\b/g));

console.log( regex.test(str) );

console.log( str.replace(wordSeparators,'_') );

console.log(
  str.replace(firstLetters, (matchedThing, x, idx) => {
    return idx === 0 ? matchedThing.toLowerCase() : matchedThing.toUpperCase();
  }).replace(/\W/g, '')
);

let email = 'john@here.com';
let validator = /(.*?)@(.*?)\.(com|net|org)/g;
console.log(validator.test(email));
console.log(email.match(validator))
```
