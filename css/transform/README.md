## CSS Transform property
* **Transform** property allow us to manipulate an element by skewing, rotating or scaling.

## Scale

```css
.element {
  width: 20px;
  height: 20px;
  transform: scale(20);
}
```
* scale function takes two parameters first is horizontally other is vertically.
* **syntax** transform: scale(horizontal, vertical)

```css
.element {
  transform: scale(2, .5);
}
```

* Or we can define specific scale. (ScaleX or ScaleY)

## SkewX and SkewY
* Tilts an element to the left or right, like turning a rectangle into a parallelogram.
* **skew()** is a shorthand that combines **skewX()** and **skewY()** by accepting both values.

```css
/* Skew points along the x-axis */
.element {
  transform: skewX(25deg);
}

/* Skew point along the y-axis */
.element {
  transform: skewY(25deg);
}

/* Skew points along the x- and y-axis */
.element {
  transform: skew(25deg, 25deg);
}
```

## Rotate
* This rotates an element **clockwise** from its original position.
* A negative value would rotate it in the opposite direction.
* we can also use the rotateX, RotateY and rotateZ

```css
div {
    transform: rotate(30deg);
    transform: rotateX(40deg);
    transform: rotateY(40deg);
    transform: rotateZ(100deg);
}
```

## Translate
* This transform function moves an element sideways or up/down.
*  It can be same with top/left/right/bottom, They have better browser support and translate can use with transition
* we can use all unit types like px, em ,rem
* Second value is referring up/down axis

**Syntax:** transform: translate(x-axis, y-axis)
```css
.element {
  transform: translate(20px, 10px);
  transform: translateX(value);
  transform: translateY(value);
}
```

## Multiple values
* we can use space-separated to use multiple feature of transform

```css
.element {
  width: 20px;
  height: 20px;
  transform: scale(20) skew(-20deg);
}
```

## ======> Summary
* There are several features of transform (scale, skew, translate and rotate)
* **Scale:** make element larger by given number times
* **Skew:** tilt and element like turning rectangle to parallelogram.
* **Rotate:** Rotates an element with **clockwise**
* **Translate:** move an element to left/right/up/down
    * classic left/right/top/bottom have better support
    * we can give any type of unit to translate (rem, em ...)