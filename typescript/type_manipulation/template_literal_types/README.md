## Template Literal Types

* Template Literal types build on ***string literal types*** and have the ability to expand into many strings via unions.
* Syntax is same with string literals

```ts
type World = "world";
 
type Greeting = `hello ${World}`;
// type Greeting is "hello world"
```

* when a union is used in the interpolated position, the type is the set  of every possible string literal that could be represented by each union member.

```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

```

* Some template literal types example

//  Uppercase

```ts
type Greeting = 'Hello, world'
type UpperGreeting = Uppercase<Greeting>
// upperGreeting is HELLO, WORLD
```

// Lowercase

```ts
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>

// QuietGreeting is hello, world
```

// Capitalize

```ts
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// Greeting is Hello, World
```

// UnCapitalize

```ts
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// UncomfortableGreeting is "hELLO WORLD"
```