## View Encapsulation

* In Angular, component's style can be **capsulated** and they don't override each other.

* The **Component** decorator provides the **encapsulation** option which can be used to control how the encapsulation is applied on aper component basis.

### Following modes:

**ViewEncapsulation.ShadowDom**: Angular uses the browser's built-in shadow DOM Api.

**ViewEncapsulation.Emulated**: Angular modifies the **component's CSS Selector** so that they are only applied to the component's view and do not affect to other.

**ViewEncapsulation.None**: Angular does not apply any sort of view encapsulation.
