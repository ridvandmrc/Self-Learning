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

``
* Pixels(px) are relative to the viewing devices, For low-dpi devices, 1px is one device pixel (dot) of display.
``

### Relative Length