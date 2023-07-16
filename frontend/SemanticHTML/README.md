## Semantic HTML

- Why we should use **semantic HMTL**
  - It is really easy to **read and understand**
  - It is help ful for SEO
  - It is better for accessibility (screen reader)

### Some tags

- **Header**: It is usuallt introductory component like logo
- **Main**: It is domninant of the page
- **Footer**: It contains T&C text and not so important things
- **nav**: In the header tags, we have mostly have **nav**
  - **nav**: is for link menu and so on
  - If we are using multiple **nav**, we should **aria-label** for accesibility
  - in the nav we should use **ul> li > a** like
  - we can use **nav also aside**
  ```html
    <head>
        <img />
        <nav>
            <ul>
                <li>
                    <a>
                </li>
            </ul>
        </nav>
    </head>
  ```
- maybe we can use **image in header**

### \<Main>

- in the main, we should use **\<section>**

```html
<main>
  <section>
    <h1>Benefits</h1>
    <p>Lorem ipsum amed sir</p>
  </section>
</main>
```

### \<footer>

- in the footer generalley it has, bunch of **link**
- with ul>li

```html
<footer>
  <ul>
    <li>
      <a>main </a>
    </li>
  </ul>
</footer>
```

### \<aside>

- Aside genereally uses for **side navigation**
- It should be in main tag

```html
<body>
  <aside>
    <header>looo</header>
    <nav>
        <ul>
            <li>one</li>
            <li>two</li>
    </nav>
  </aside>
</body>
```

### \<article>

- **article** is explain itself
- It should be encapsulated and we are able to use it another page directly
- **article** is clear topic **section** is more generic

### \<details>

- when we want to use, collapsable type
- we can use **details** and **summary**

```html
<section>
  <details>
    <summary>summary of text</summary>
    <p>lorem ipsum sir amed</p>
  </details>
</section>
```

### \<mark>

- If we want to highlt something we can use **<mark>**.

```html
test test <mark>highleted</mark>
```

### \<time>

- If we will use time anywhere.

```html
date is <time datetime="08:30">8 am </time>
```

### Avoid to use this tags

- **div**: there is no any meainning of this element
- **span**: Also it is not any meaning

### we can use HTML5- outlier to outline the app

## ==========> Summary

- Semantic HTML make the application be more readable
- It is really helpful for **SEO**
- standart tags are less readable like \<div>, \<span> they are not meaningful
- header, section, nav, main, footer some semanti html
