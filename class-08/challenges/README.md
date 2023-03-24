# Regular Expressions 101

## Overview

Regular expressions (or "Regex" ... said "Rej-Ex") are a means of identifying patterns in strings. We commonly use them to validate input, replace character patterns with other characters or refer to character patterns in a string.

Mechanically, a regex is composed of a "Pattern To Match" between 2 delimiters (usually a `/`), followed by some optional instructions, known as "quantifiers".  Quantifiers are single letter instructions:

- g = "Global Match"
- i = "Case Insensitive"

### e.g. `/foo/ig`

For our examples, lets use the following string:

**`The rain in Spain falls mainly in the plain`**

Does this string contain the letter "T"?

- `/T/`
- `/t/i`

#### We can use a "Range", which is a group of letters or numbers in brackets to see if there are things of the same basic type

Does this string contain any capital letters?

- `/[A-Z]/`

Lowercase letters?

- `/[a-z]/`

Numbers?

- `/[0-9]`

#### We can use parenthesis `()` to group things together

Does the string contain any words with "ain" in them?

- `/(ain)/`

#### There are many "helpers" that you can use to find more interesting parts of the string

- `\s` = White space
- `\b` = Word Boundary
- `\w` = All word characters (A-Z,a-z,0-9)
- `^` = Beginning of the string
- `$` = End of the string
- `.` = Any Character
- `*` = Greedy (keep going!)

#### So, with combinations of helpers, ranges, and groups, you get pretty intricate

`/s.?([A-Za-z]in)\s+/g`

a lowercase s, followed by any letters, followed by "in" followed by a space ... in other words "spain", but not "rain"

## JavaScript Methods and Practical Use

### Boolean Checks (Does my string match the regex?)

```javascript
  let str = "The rain in Spain falls mainly in the plain";
  // Are there any words ending with some letter before "in"
  let regex = /([A-Za-z]in)\b/g;
  regex.test(str);  // true
```

### What is in my string? (can I get a list of all the matches?)

```javascript
  let str = "The rain in Spain falls mainly in the plain";
  // The first letter in every word
  let regex = /(\b\w)/g;
  str.match(regex);  // T,r,i,S,f,m,i,t,p
```

### Replace something in my string

```javascript
  let str = "The rain in Spain falls mainly in the plain";
  // The first letter in every word
  let regex = /(\b\w)/g;
  str.replace(regex,'-');  // -he -ain -n -pain -alls -ainly -n -he -lain"
```

### Replace something in my string, but use a function to do it

```javascript
  // Camel Case a String ...

  let str = "The rain in Spain falls mainly in the plain";
  let regex = /\b(\w)/g;
  let newString = str.replace(regex, (rawMatch, matchedThing , idx) => {
      return idx === 0 ? matchedThing.toLowerCase() : matchedThing.toUpperCase();
    }).replace(/\W/g, '')

  console.log(newString); // theRainInSpainFallsMainlyInThePlain
```

## Reference and Resources

- [Regex Information/Tutorial](https://www.regular-expressions.info/)
- [Regex Runner/Tester](https://regex101.com/)
