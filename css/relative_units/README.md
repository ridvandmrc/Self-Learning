## CSS Units
* CSS has several different units for expressing a length
* Many CSS properties take **"length"** values, such as **width**, **margin**, **padding**, **font-size**, etc.
* **Length** is a number followed by a length unit, such as 10px, 2em, etc.
``
Note: if the value is 0, the unit can be omitted.
``
* For some CSS properties, negative length are allowed.

* There are **two** types of length units: **absolute** and **relative**

### Absolute Length
* The Absolute length units are **fixed** and a length expressed in any of these will appear.
* Absolute length units are **not recommended** for use on screen, because screen sizes **vary** so much.
* However, they can be used if the output medium is known, such as for **print layout**.

Some Absolute Units: 
| Unit   |      Description      |  
|----------|:-------------:|
| cm | centimeters |
| mm | millimeters   |
| in | inches (1 in = 96px = 2.54cm) |
| px * | pixels (1px = 1/96th of 1in)|
| pt | points (1pt = 1/72 of 1in) |
| pc | picas (1pc = 12pt)|

```
* Pixels(px) are relative to the viewing devices, For low-dpi devices, 1px is one device pixel (dot) of display.
```

### Relative Length

* Relative length units specify a length relative to **another length property**. 
* Relative length units scale better between different rendering medium.

Some Relative Units: 
| Unit   |      Description      |  
|----------|:-------------:|
| **em** | Relative to font-size of parent element (2em means 2 times the size of the current font) |
| **rem** | Relative to font-size of the root element   |
| vw | Relative to 1% of the width of the viewport*(**all screen**) |
| vh | Relative to 1% of the height of the viewport (**all screen**) |
| vmin | Relative to 1% of viewport's* smaller dimension |
| vmax | Relative to 1% of viewport's* larger dimension  |
| % | Relative to the parent element  |

## ======> Summary
* There are two types of length units **absolute** and **relative**
* Absolute length units are **fixed**, not recommended
* Relative length units specify a length relative to **another length property**
* **em**: relative to font-size of parent element
* **rem**: relative to font-size of root element
* **vw**: relative to 1% of width **all screen**
* **vh**: relative to 1% of height **all screen**
*- **%**: relative to the parent element