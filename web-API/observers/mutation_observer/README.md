## Mutation Observer

* The **mutation Observer** provides the ability to watch for changes being made to the DOM tree.

### Constructor
**MutationObserver()**
* creates and returns a new **MutationObserver** which invoke a specified callback function when DOM changes occur.

### Methods
* **observe()** 
* configures the **MutationObservers** to begin receiving notifications through its callback function when DOM changes matching the given options occur
    * **Options**
        * **Subtree:**
            Set to **true** to extend monitoring to the entire subtree of nodes rooted at **target**. Default is true
        * **childList:**
            Set to **true** to monitor the target node for the addition of new child nodes or remove.
        * **attributes:**
            Set to **true** to watch for changes to the value of attributes on the node or nodes being monitored.
        * **attributeFilter:**
            An array of specific attribute names to be monitored. If this property isn't included,
            all attribute will be tracked.
        * **attributeOldValue:**
            set to **true** record the previous value of any attribute that changes when monitoring the node or nodes for attribute changes.
        * **characterData:**
            set to **true** to monitor the specified target node for changes to the character data contained within the node or nodes.

* **disconnect():**
    Stop the **MutationObserver** instance from receiving further notifications until and unless **observe()** is called again.

* **takeRecords():**
    Remove all pending notifications from the **MutationObserver**'s

### Example
```js
// Select the node that will be observed for mutations
const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
```