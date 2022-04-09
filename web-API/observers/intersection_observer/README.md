## Intersection Observer
* Observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

* When an **IntersectionObserver** is created. it's configured to watch for given **ratios** of visibility within the root. The configuration cannot be changed once the **IntersectionObserver** is created

* we can watch multiple target elements with the same observer.

### Constructor
**IntersectionObserver()**
* Creates a new **IntersectionObserver** object which will execute a specified callback function when it detects that a target element's visibility has crossed.

### Properties
&nbsp;  &nbsp;  **IntersectionObserver.root**
* Element or document whose bounds are used as the bounding box when testing for intersection. 

* If no **root** value was passed to the constructor or its value **null**, the top-level doc's viewport is used.

&nbsp;  &nbsp;  **IntersectionObserver.rootMargin**
* this is a rectangle that provided some threshold.

&nbsp;  &nbsp;  **IntersectionObserver.threshold**
* A list of threshold, sorted in increasing numeric order, where each threshold is a ratio of intersection area to bounding box area of an observed target.

### Methods
&nbsp;  &nbsp;  **IntersectionObserver.disconnect()**
* stops the **intersectionObserver** object from observing any target.

&nbsp;  &nbsp;  **IntersectionObserver.observe(...)**
* Tells the **IntersectionObserver** a target element to observe

&nbsp;  &nbsp;  **IntersectionObserver.takeRecords()**
* Returns an array of **IntersectionObserverEntry** Object for all observed targets

&nbsp;  &nbsp;  **IntersectionObserver.unobserve(...)**
* Tells the **IntersectionObserver** to stop observing a target element

### Examples
```js
const intersectionObserver = new IntersectionObserver((entries) => {
    // If ratio is 0, the target is out of view
    // and we do not need to do anything.
    if(entries[0].intersectionRatio <= 0) return;

    console.log('Loaded new items)
})

```

