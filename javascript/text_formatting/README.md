## Text Formatting 

### Strings
string is a set of "elements" of 16-bit unsigned integer values.

#### String Listerals
we can create string by using single or double quotes:
```js
'foo'
"bar"
```

### String Object
it wrapper around the string primitive data type.

```js
const firstString = '2 + 2'; // Creates a string literal value
const secondString = new String('2 + 2'); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns a String object containing "2 + 2"
```

Methods of String (Important)

| Method      | Description | Example
| ----------- | ----------- |---------|
| CharAt, CharCodeAt, codePointAt | return the character or character code at specified in string       | "Aaa".charAt(0) => 'A', "Aaa".charCodeAt(0) ==>65 |
| StartWith, endsWith, includes   | return if start,end or include specified string  | "Aaa".startsWith('a') ==> false, "Aaa".includes('a') ==> false |
| repeat  | return string the given times  | "a".repeat(5) => "aaaaa"|
| match, matchAll  | it works only regular expression  | match return array, matchAll return iterators |

### Date and  Time formatting
***Intl.DateTimeFormat*** object is useful for formatting date and time.

```js
const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT 
```

### Number Formatting
***Intl.NumberFormat*** is useful for formatting numbers;

```js
const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });
gasPrice.format(4.5)
```

### SUMMARY
* Some important  string methods;
    * CharAt, CharCodeAt, codePointAt ===>(return character or ASCII number)
    * startWith, endWWith, includes ====> (check if string is starting, ending or including specified string)
    * repeat ===>( return string the given times)
* Formatting;
    * Intl.DateTimeFormat is useful for formatting date and time
    * Intl.NumberFormat is useful for formatting numbers
    ```js
    const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });
        gasPrice.format(4.5) // $4.500
    ```
    * match and matchAll ==> match return array, matchAll return iterator
