### Accessibility and ARIA

- We already familiar with **HTML**, but we are not familiar with **Accesibility Rich Internet Application (ARIA)**

- HTML and ARIA are important for making digital product accessible aspecially when we want to implement assistive technology(AT) like screen reader

### ARIA Roles

- Aria role is added vai a **role=<Role_Description>** attribute, ARIA Roles:

* landmark
* document
* widget
* abstract

### Landmark ARIA Roles

- Much like sementic HTML elements, landmark **ARIA** Roles are used to give users of assistive technology a better way to navigate and identify the different parts of web page.

- There are a lot of roles, we will notice that there are HTML5 elements with thee same name, such as **<main> and aria landmark role='main'**.

```html
<nav class="mobile-nav" role="navigation" aria-label="Mobile Menu">
  List of Links
</nav>
```

- some aria label listed:

  - **banner:** A region that contains the prine heading or internal title of a page.

  - **contentinfo:** A region that contains information about the parent document such as copyrights and links privacy statements.

  - **form:** A region of document that represents a collection of form-associated elements

  - **main:** Main content in a document. In almost all cases a page will have only one **role="main"**

### ARIA States & Properties

- ARIA states and properties are often used to support **ARIA** roles that exist on a page.
- **ARIA** states are more dynamic and are typically updated with JS as a user interacts with a page. Screen readers are notified when these state change, and can announce these chagens to users after an interaction takes place.

- These are the most commonly used and practical **aria-labels and aria state**

* **aria-autocomplete:** Indicates whether user input completetion suggestion provided.
* **aria-checked:** indicate current checkbox status checked or not.
* **aria-control:** describe the element whose contents are cotrolled by current element.
* **aria-describedby:** Identifies the element that describes the object. (aria-labeledby)
* **aria-disabled:** indicate the element is disabled 
* **aria-expanded:** describe expanded or collapsed
* **aria-hidden:** describe element hidden or visible
* **aria-invalid:** Indicates the entered value is confirmed value
* **aria-label:** defines input label
* **aria-required:** Indicates input is required
* **aria-selected:**