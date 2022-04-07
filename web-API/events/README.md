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
