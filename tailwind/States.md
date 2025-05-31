### Hover, focus and other state

- to apply the state we can use **<state>:...**
- To hover an item use **hover:bg-sky-700**
- we can use all pseudo-class, `:hover, focus, :first-child, required`

```jsx
loop {

    <div class="odd:bg-white even:bg-gray-50">
    <div class="nth-3:underline">
    <input class="invalid:border-pink-500" />
}

```

#### has()
* use the **has-**** variant to style an element based on the state or content of its **descendant**

```html
<label class="has-checked:bg-indigo-50">
    <input type="radio" />
</label>
```

#### group-has
* If you need to style an element based on the descants of a parent element, we can mark the `group` and use
`group-has-*`

```html
<div class="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>

```

#### peer-has
* If we need to style an element base on the descants of a **sibling** element,
we should mark sibling with `peer` and use `peer-has-*`

```html
<div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    Create a to do list
  </label>
  <svg class="peer-has-checked:hidden ..."><!-- ... --></svg>
</div>
```

#### :not()
* `not-` variant to style an element when a condition is **not true**.

```html
<button class="bg-indigo-600 hover:not-focus:bg-indigo-700" > button </button>
```

#### Styling base on parent state

* If we need to style an element based on the state of the parent element,
we can use **parent group** and **group-***

```html
<a href="#" class="group ...">
  <div>
    <svg class="stroke-sky-500 group-hover:stroke-white ..." fill="none" viewBox="0 0 24 24">
      <!-- ... -->
    </svg>
    <h3 class="text-gray-900 group-hover:text-white ...">New project</h3>
  </div>
  <p class="text-gray-500 group-hover:text-white ...">Create a new project from a variety of starting templates.</p>
</a>
```

`
If we want to differtiate nester group we can use like **group/item** or **group/****
`

#### Arbitrary group
* we can create our own selector to select an item in between square brackets.
```html
<div class="group is-published">
  <div class="hidden group-[.is-published]:block">
    Published
  </div>
</div>

```

#### styling base on sibling state
- we can also select an element base on the peer state,
`peer` class and use `peer-*` like `peer-invalid`.

```html
 <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
 
  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>
 
  <label for="email">Email:</label>
  <input id="email" name="email" type="email" class="is-dirty peer" required />
  <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
 
```

#### Pseudo Elements

### ::before and ::after
- we can use it directly
- we can also use other pseudo element like this, placeholder, file, marker

```html
<span class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
 
```