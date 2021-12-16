## Regular Expressions

Regular expressions are patterns used to match character combinations in string.

These patterns are used with ***exec()*** and ***test()*** methods of RegExp and with the ***match, matchAll,replace ,replaceAll,search and split*** methods of String.

### Creating a regular expression

we can create a regular expression in two ways:

* Using a regular expression literal, wich consists of a pattern enclosed between slashes ('/').

```js
    let re = /ab+c/
```

* or calling constructor function of the ***RegExp***.

```js
    let re = new RegExp('ab+c')
```

### Writing a regular expression pattern

we can use this web [site](https://regexr.com/) to generate regex.

### Escaping
if we need to use any og the special character. we must use escape by using backslash(\\).

### Regular expressions functions

| Method      | Description |
| ----------- | ----------- |
| exec()      | Execute a search for match in a string. It returns information array or null |
| test()   | test for a match string. it returns ***true*** or ***false***  |
| match()   | string.match(regularExp), return arrays matching information or null if un-match |
| matchAll()   | string.matchAll(regularExp), return iterator containing all group |
| search()   | string.search() tests for match in a string. it returns the index of match, or -1 if fails |
| split()   | uses a regular expression or a fixed string to break a string |

### Advanced searching with flags

| Method      | Description |
| ----------- | ----------- |
| d | Generate indices for substring matches  |
| g | Global search  |
| i | Case-insensitive search  |
| m | multi-line search  |
| s | Allows . to match newline characters  |
| u | "unicode"; treat a patters as a sequence ...  |
| y | perform a "sticky" search...  |

## ===> SUMMARY
* we can create regex 2 way ***/regular expression/*** or ***new Regex***
* regular expression and string have some special methods,
* regex flag
