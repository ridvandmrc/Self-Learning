### Responsive Web Design - Media Queries
* Media query is a CSS technique introduced in CSS3.
* It uses the **@media** rule to include a block of CSS properties only if a certain condition is true.
* we can select the device type (print, screen , all)
* we can track this in JS side to use **window.matchMedia()** and **MediaQueryList.addEventListener()**.
* **Media Features:** Describe a specific characteristic of the user agent, output device or environment.
    * any-hover
    * aspect-ratio
    * color
    * display-mode
    * height (max-height, min-height)
    * width (max-width, min-width)
    * orientation (portrait, landspace)
    ...
* **Logical Operators**: can be used complex media query: **not**, **and** and **only**. Also we can use **,**(comma) to define **or** logic

### Targeting Media types
* we can write a query to specific media device...(print, screen all).
```css
@media print {...}
@media screen, print {...}
```
### Targeting Media Features
```css
@media (hover: hover) {...}
@media (max-width: 1240px) {...}
```

### Complex multiple types or features
* Tha **and** keyword combines a media feature with a media type or other media feature.

```css
@media (min-width: 30em) and (orientation: landspace) {...}
@media (30em <= width <= 50em ) { ... }
@media (not(hover)) {...}
@media (not (color)) or (hover) { ... }
```

### Some examples
```css
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
```

### Orientation: Portrait / Landspace
* when the browser is wider than its height, called "Landspace" orientation.

```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## =====> Summary
* There are some target of devices (screen, print, speech-to-text, all )
* There are several features to track (width, height, color,orientation)
* syntax : ````@media screen and (width: 30px)````
* we can use logical operators and provide complex selector **(and, not, or)**