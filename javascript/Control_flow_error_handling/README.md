## Control flow and error handling
### Conditional statements
<b> Best Practice of if condition use always {}. </b>

<h3> Falsy Values</h3>
    <ul>
        <li>False </li>
        <li>undefined </li>
        <li>null </li>
        <li>0 </li>
        <li>NaN </li>
        <li> Empty String ("")</li>
    </ul>
### Exception Handling

we can throw exception using **throw** and handle it by using **try....catch**

=> we should override toString method to show error message
=> prototype predefined Object, includes toString etc.

```js
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };

// ----------------------------------------------------
// extra sample

// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)
UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');

```

### ====> Summary
    prototype include predefined methods.
        UserException.prototype.toString
    False values (undefined, false, 0, NaN, null and empty string)
