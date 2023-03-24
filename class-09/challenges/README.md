# Object Iteration

## Overview

Just like with arrays, you'll often want to iterate over objects. But unlike arrays, objects have more than just one moving part ... and very often, they go deeper than just a single property.

```js
let person =
  {
    "name":"John",
    "role":"Dad",
    "interests": ["Coaching","Teaching"]
  };
```

To iterate over the properties of an object, there are various ways to iterate or traverse. These will only give you access to the current layer, however.  If you want to fully traverse the object and any sub-objects or arrays, you'll need to nest...

**for ... in** ... a looping method for objects that acts much like an old fashioned "for" loop.

```js
for( let property in person ) {
  console.log(property, person[property]);
}
```

**Object.keys** ... this is an Object constructor prototype method, which takes in an object as an argument and returns an array of keys (properties)

```js
let properties = Object.keys(person);
properties.forEach( property => {
  console.log(property, person[property]);
})

// Or more succinctly
Object.keys(person).forEach( property => {
  console.log(property, person[property]);
})
```

**Object.values** - Returns an iterable array of just the values from the object.

```js
console.log(Object.values(person));
// OUTPUT
    [
        'John',
        'Dad',
        [ 'Coaching', 'Teaching' ]
    ]

// To Iterate it ...
Object.values(person).forEach(value => {
  console.log(value);
})

// OUTPUT
    John
    Dad
    ['Coaching', 'Teaching']
```

**Object.entries** - Returns an array of each "Entry" as an an array with a key and value

```js
Object.entries(person).forEach(entry => {
  console.log(entry);
})

// OUTPUT
[
    [ 'name', 'John' ],
    [ 'role', 'Dad' ],
    [ 'interests', [ 'Coaching', 'Teaching' ] ],
]
```

### Caveats and Notes

- Applies the callback to each element
- You cannot "Return" a value
- You cannot "break" or "continue" as you can with a for loop
- By default, forEach does not mutate the array
- If you mutate it in process, you will have interesting issues

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [What the heck is a callback?](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
