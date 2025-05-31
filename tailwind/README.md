## Tailwind Tutorial

### Layout
* aspect-ratio
  * aspect-video
  * aspect-<ratio>: aspect-(16/9, 1/2, 1/4)

*  columns:
  * columns-<number>
  * columns-(3xs, 2xs, xs, sm, md, lg, xl ...)
  * gap-<width>

* box sizing
  * box-border and box-content

* display
  * use possible display settings directly like:
    flex, inline, block, grid ...

* float
  * float-(right, left, start, end, none)

* object-fit
  * object-(contain, cover, fill, none, scale-down)

* object-position
  * object-(top-left, top, top-right, left, center)

* overflow
  * overflow-(hidden, auto, clip, visible, scroll)

* position
  * static, absolute, relative, sticky
  * bottom-0, left-0

* top/right/bottom/left
  * inset-<number>, -inset-<number>, top-<number>, left-<number>

* visibility:
  * visible, invisible, collapse

* z-index:
  * z-<number>, z-(1,2,3,33), -z-10

### flexbox & grid

* flex-basis
  * basis-<number>
  * basis-full, basis-auto, basis-3xs

* flex-direction
  * flex-row, flex-col, flex-reverse-row

* flex-wrap
  * flex-wrap, flex-nowrap, flex-wrap-reverse

* flex
  * flex-<number>, flex-(1,2,3,)
  * flex-1/2

* grow
  * grow-<number> ,grow-(1,3,2)

* shrink
  * shrink-<number>: shrink-(1,2,3,)

* grid-template-columns
  * grid-cols-<number>

* grid-column:
  * col-span-<number>
  * col-start-<number> - col-end-<number>

* grid-template-rows
  * grid-rows-<number>,
  * row-span-<number>

* grid-row
  * row-span-<number>
  * row-start-<number> - row-end-<number>

* gap
  * gap-<number>
  * gap-x-<number>
  * gap-y-<number>

* justify-content
  * justify-(start, end, center, between)

* justify-items
  * justify-items-(start, end, end-safe, center)

* justify-self
  * justify-self-(auto, start,center)

* align-content
  * content-(normal, start, center, end)

* align-items
  * items-(start, end, center, ...)

* align-self
  * self-(auto, start, end, center)

### Spacing

* padding
  * p-<number>, pt, pr, pl, pb
  * p-[<value>]
  * px-<number>, py-<number>

* margin
  * m-<number>, ml, mt, mr, mb
  * m-[<value], 
  * mx-<number>
  * ml-auto

### Sizing

* width
  * w-<number>, w-3xs, w-sm, w-1/2
  * w-full, w-dvw, w-screen, 

* min-width, /max-wdith
  * min/max-w-<number>, min/max-w-<fraction>, 
  * min/max-w-<md, lg, xl , 2xl>
  * min/max-w-fit, min/max-w-max

* height
  * h-<number>, h-<fraction>,h-px
  * h-full, h-dvh, h-[50vh]

* min/max-height
  * min/max-h-<number>, min/max-h-<fraction>
  * min/max-h<md, lg, xl, 2xl>
  * min/max-h-fit, min/max-h-max

### Text and font  Properties
* font-[value]:
  * font-(sans, mono ...)
  * font: font-(font-family:-myfont)

* font-style
  * directly italic and not-italic
  ```html
  <div class='font-sans italic'>
  ```

* font-weight
  * font-(thin, light, bold, extrabold)
  * font-(<custom-property>) ===> font-(--my-font-weight)
  * font-[<value>] ===> font-[1000]

* letter-space
  * tracking-(tighter, tight, normal, wide, wider, widest)
  * tracking-[<value>]

* line-clamp
  * line-clamp-<number>
  * line-clamp-none
  * line-clamp-[calc(var(--characters)/100)]

* line-height
  * text-<size>/<number>: text-sm/6, text-lg/7

* text-(alignment)
  * text-(left, center, right, justify, start, end)

* color:
  * text-<value>/opacity
  * text-blue-600, text-blue-600/50
  * text-[#50d71e, text-(--my-color)]
  * hover:
    * hover:text-blue-600
  * responsive:
    * md:text-green-600

* text-decoration:
  * underline, overline, line-through

* decoration color
  * decoration-<color>-<impact>: decoration-red-300, decoration-blue-900

* decoration style
  * decoration-(solid, double, dotted, dashed, wavy) 

* text decoration
  * uppercase, lowercase, capitalize, normal-case

* text overflow
  * truncate, text-ellipsis, text-clip 

* text-wrap
  * text-wrap, no-wrap, text-balance, text-pretty 

* text indent
  * indent-<number>
  * -indent-<number>

* vertical align
  * align-(middle, top, baseline, super, sub)
   align-[12]

* white-space
  * white-space-(normal, nowrap, pre, pre-line, pre-wrap)

* word-break
  * break-normal, break-all, break-keep

* text-(size)
  * text-(sm, base, lg, xl, 2xl ...) :(0.875rem, 1rem, 1.125rem, ...)


* list type
  * list-disc, list-decimal, list-none

### Background

* Background-color
  * bg-<color>-<value>/<opacity>, bg-red-100, bg-red-50, bg-blue-50/40 (40% opacity)
  * bg-[#rfe12e]

* background-image
  * bg-[<value>], <value>: image url
  * bg-linear-to-r from-cyan-500 to-blue-500, bg-linear-to-bl from-violet-500 to-fuchsia-500
  * bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

### Borders

* border-radius
  * rounded-(xs, sm, md, lg, xl, 2xl, 3xl, full)
  * rounded-[value]
  * rounded-r-lg, rounded-bl-sm

* border-width
  * border: border-width:1px;
  * border-<number>, border-t-<number>, border-b
  * divide-x, divide-y ==> remove border from end

* border-color
  * border-transparent, border-<color>-<value>
  * border-x-<color>-<value>
  * divide-<color>-<value>

* border-style
  * border-(solid, dashed, dotted, double, hidden)
  * divide-dotted

### Effects

* box-shadow
  * shadow-(sm, md, lg, xs, 2xs, none)
  * shadow-<color>-<value>, shadow-red-100
  * inset-(sm, md, lg, xs, 2xs, ...)
  * inset-ring-2, inset-ring-blue-500

* text-shadow
  * text-shadow-(md, sm, lg, 2xs, xs)

* opacity
  * opacity-<number>, opacity-75 ==> opacity: 0.75
  * conditionally opacity, disabled:opacity-75

### Blur (filter:blur())
  * blur-(xs, sm, md, lg)
  * blur-[<value>], blur-[2px]

### brightness (filter: brightness())
  * brightness-<number>, brightness-50

### contrast (filter: contrast())
  * contrast-<number>: contrast-50 ==> (filter: contrast(50%))

### drop-shadow (filter: drop-shadow())
  * drop-shadow-(xs, sm, md, lg)

### grayscale filter: grayscale()
  * grayscale-<number> - granscale,100

## backdrop filters

### backdrop-filter -backdrop-filter:blur()
  * backdrop-blur-(xs, sm, md, lg, xl)
  * backdrop-blue-[<value>]

### brightness - backdrop-filter:brightness()
  * backdrop-brightness-<number>

### contrast - backdrop-filter: contrast()
  * backdrop-contrast-<number>

### grayscale filter: backdrop-filtergrayscale()
  * backdrop-grayscale-<number> - granscale,100

## Transition & animation

### Transition Property
  * transition, transition-all
  * transition-(colors, opacity, shadow, transform, none)

### Transition Behavior
  * transition-normal, transition-discrete

### Transition duration
  * duration-<number>ms

### Transition Timing Function
  * ease, ease-in, ease-linear

### Transition Delay
  * delay-<number>

### Animation
  * we can use ready to use animation
  - animate-(spin, ping, pulse, bounce,)
  - for custom animate-[wiggle_1s_ease_infinite]

## Transform

### rotate
  * rotate-<number> ===> rotate-45
  * rotate-x-<number> ====> rotate-y-90
  * rotate-y-<number> ====> rotate-y-210

### scale
  * scale-<number> ===> scale-75 !(75%) 
  * scale-x-<number> ====> 
  * scale-y-<number>

### transform origin
  * origin-(center, top, top-right, left...)

### translate
  * translate-<number>
  * translate-x-<number>
  * translate-y-<number>

## Interactivity

### accent-color
  * accent-<color>-<value> ===> update checkbox color

### appearance-color
  * appearance-none, appearance-auto

### caret-color
  * caret-<color>-<value>
  * caret-transparent
  * caret-inherit

### cursor
  * cursor-(pointer, loading, move, test, disable)

### field-sizing
  * field-sizing-fixed, field-sizing-content

### Pointer events
  * pointer-events-auto, pointer-events-none