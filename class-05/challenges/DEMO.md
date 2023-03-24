# Code Challenge Demo

```javascript
const numbers = [1,2,3,4,5,6,7];

const newthing = numbers.reduce( (accumulator, val, idx) => {
  return accumulator + val;
}, 100);

console.log(newthing);


const pokemon = [{'url':'https://pokeapi.co/api/v2/pokemon/1/','name':'bulbasaur'},{'url':'https://pokeapi.co/api/v2/pokemon/2/','name':'ivysaur'},{'url':'https://pokeapi.co/api/v2/pokemon/3/','name':'venusaur'},{'url':'https://pokeapi.co/api/v2/pokemon/4/','name':'charmander'},{'url':'https://pokeapi.co/api/v2/pokemon/5/','name':'charmeleon'},{'url':'https://pokeapi.co/api/v2/pokemon/6/','name':'charizard'},{'url':'https://pokeapi.co/api/v2/pokemon/7/','name':'squirtle'},{'url':'https://pokeapi.co/api/v2/pokemon/8/','name':'wartortle'},{'url':'https://pokeapi.co/api/v2/pokemon/9/','name':'blastoise'},{'url':'https://pokeapi.co/api/v2/pokemon/10/','name':'caterpie'},{'url':'https://pokeapi.co/api/v2/pokemon/11/','name':'metapod'},{'url':'https://pokeapi.co/api/v2/pokemon/12/','name':'butterfree'},{'url':'https://pokeapi.co/api/v2/pokemon/13/','name':'weedle'},{'url':'https://pokeapi.co/api/v2/pokemon/14/','name':'kakuna'},{'url':'https://pokeapi.co/api/v2/pokemon/15/','name':'beedrill'},{'url':'https://pokeapi.co/api/v2/pokemon/16/','name':'pidgey'},{'url':'https://pokeapi.co/api/v2/pokemon/17/','name':'pidgeotto'},{'url':'https://pokeapi.co/api/v2/pokemon/18/','name':'pidgeot'},{'url':'https://pokeapi.co/api/v2/pokemon/19/','name':'rattata'},{
  'url':'https://pokeapi.co/api/v2/pokemon/20/', 'name':'raticate'}];

// Return an indexed object (name:url)
const indexed = pokemon.reduce( (acc, val, idx) => {
  acc[val.name] = val.url;
  return acc;
}, {} );

console.log(indexed);

// Return an array of their names
const names = pokemon.reduce( (acc, val, idx) => {
  acc.push( val.name );
  return acc;
}, [] );

console.log(names);
```
