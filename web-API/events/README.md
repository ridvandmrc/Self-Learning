## Event
* The Event interface represents an event which takes place in the DOM

### Interfaces based on Event
* Below is a list of interfaces which are based on the main **event** interface, 
    * closeEvent
    * ClipboardEvent (copy,paste and cut)
    * CustomEvent **!important**
    * DragEvent
    * ErrorEvent **!important**
    * InputEvent
    * KeyboardEvent
    * MouseEvent
    * GamePadEvent
    * WheelEvent

## Constructor
* **Event()** : create an **Event** object

## Properties

###  &nbsp; &nbsp; Event.bubbles
* A boolean value provide that bubble events bottom to up or not

###  &nbsp; &nbsp; Event.composed
* a boolean indicating whether or not event can bubble across boundary between ShadowDom and the regular DOM.

###  &nbsp; &nbsp; Event.currentTarget
* A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent. 

###  &nbsp; &nbsp; Event.defaultPrevented
* indicates return value of ``Event.preventDefault()``.

###  &nbsp; &nbsp; Event.eventPhase
* Indicates which phase of the event flow is being processed. Returning these numbers:
``` NONE, CAPTURING_PHASE, AT_TARGET, BUBBLING_PHASE ```

### &nbsp; &nbsp; Event.isTrusted
* indicates that event was initiated by browser (after user click) or by a script

### &nbsp; &nbsp; Event.target
* A reference to the object to the event was originally dispatched

### &nbsp; &nbsp; Event.timeStamp
* The time at which the event was created (in milliseconds).

### &nbsp; &nbsp; Event.type
The case-insensitive name identifying the type of the event

## Methods

### &nbsp; &nbsp; Event.composedPath()
* Returns the event's path (an array of objects on which listeners will be invoked). This does not include nodes in shadow tree

### &nbsp; &nbsp; Event.preventDefault()
* Cancels the event (if it is cancellable)

### &nbsp; &nbsp; Event.stopImmediatePropagation()
* For this particular event, prevent all other listeners from being called. This includes listeners attached to the same element

### &nbsp; &nbsp; Event.stopPropagation()
* Stops the propagation of events further along in the DOM.
