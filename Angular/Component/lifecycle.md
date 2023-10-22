# Component Lifecycle

* A Component instance has a **lifecycle** that starts when Angular instantiates the component class and renders the component view along with its child views.

* The **lifecycle** continues with **change detection**, as Angular checks to see when data-bound properties change and updates both the view and component instance as needed

* The **lifecycle** ends when Angular destroys the component instance and removes its render template from the **DOM**.

* **Directives** have a similar lifecycle, as Angular creates, Update, and destroys instances in the course of execution.


## Responding to lifecycle events

* There are a lot of **lifecycle hooks** in the **@Angular/core** library.
* The hooks give us the opportunity to act on a component or directive instance at the appropriate moment, as Angular creates, updates, or destroy that instance.
* Each interface has a **hook methods** that begin with **ng**. For example **OnInit** interface has a method named **ngOnInit**, let's do it!!

```ts
@Directive({selector: '[appPeekABoo]'})
export class PeekABooDirective implements OnInit {
    constructor(private logger:LoggerService){ }

    // implement OnInit's `ngOnit`method
    ngOnInit() {
        this.logIt('OnInit')
    }

    logIt(msg: string) {
        this.logger.log(`test test`)
    }
}
```

### lifecycle event sequence
* After our application instantiates a **component** or **directive** by calling its constructor, Angular calls the hook methods you have implemented at the appropriate point in the **lifecycle** of that instance.

* Angular executes hook methods in following sequence.

#### ***ngOnChanges() - mostly used***

***purpose***: when Angular sets or resets data-bound input properties. The method receives a **SimpleChanges** object of current and previous property values.

`This happens frequently, so any operation you perform here impacts performance significantly` 

**Timing**: Called before **ngOnInit()** (if the component has bound inputs) and whenever one or more data-bound input properties change.

`If the component has no inputs or we use it without providing any inputs "ngOnChanges()".`

<hr />

#### ***ngOnInit() - mostly used***

***Purpose***: Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties.

**Timing**: This hook called only once. after the **ngOnChanges()**. **ngOnInit()** is still called even when **ngOnChanges()** is not.

<hr />

#### ***ngDoCheck()*** 

***Purpose***: Detect and act upon changes that Angular can't or won't detect on its own.

***timing***: Called immediately after **ngOnChanges()** on every change detection run, and immediately after **ngOnInit** on the first render.

<hr />

### **ngAfterContentInit()**

***Purpose***: It triggered after Component or Directive on the view (DOM)

***Timing***: Called once after the first **ngDoCheck**.

<hr />

### **ngAfterContentChecked()**

***Purpose***: It triggers after component or directive projected

***Timing***: Called after **ngAfterContentInit()** and every subsequent **ngDoCheck()**.

<hr />

### **ngAfterViewInit() - Mostly used**

**Purpose**: It Trigger after component and its child on the DOM (It is important lifecycle)

**Timing**: called once after first **ngAfterContentChecked()**

### **ngAfterViewChecked()**

**Purposed**: It works like **ngAfterViewInit**

**Timing:** called after **ngAfterViewInit** and every subsequent **ngAfterContentChecked**

<hr />

### **ngOnDestroy - Mostly used**

**Purposed**: If we want to clean or unsubscribe something, we have to use this lifecycle hooks

**Timing**: Called immediately before Angular destroys the directive or component.