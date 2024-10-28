# Events, Event Building, `setInterval`, and `setTimeout` in JavaScript

## Events
Events in JavaScript are actions or occurrences, such as a user clicking a button, loading a webpage, or submitting a form. You can use event listeners to respond to these actions.

Docs for JS Events : https://developer.mozilla.org/en-US/docs/Web/API/Event

### Common Event Types:
- `click`: Triggered when an element is clicked.
- `mouseover`: Triggered when the mouse hovers over an element.
- `keydown`: Triggered when a key is pressed.

### Event Listener:
```js
element.addEventListener(eventType, callbackFunction);
```
Example :
```javaScript
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```


## Event Bubbling in JavaScript

Event Bubbling is a method of event propagation in the DOM (Document Object Model) where an event starts from the deepest target element and propagates (bubbles) up to the ancestor elements. 

For example, when a button inside a `div` is clicked, the `click` event will trigger on the button first and then bubble up to its parent `div`, and so on up to the root element.

### How It Works:
1. **Target Phase**: The event is triggered on the target element.
2. **Bubbling Phase**: The event propagates from the target element up to its ancestors (parents) all the way to the `document` object.

### Stopping Event Bubbling

You can stop the event from bubbling up by using the event.stopPropagation() method.

### Key Points:

- Default Behavior: By default, most DOM events bubble up unless explicitly stopped.
- stopPropagation(): Stops the bubbling of events.
- event.target: Refers to the actual element that triggered the event.

## setInterval

The setInterval method repeatedly calls a function or executes code after every given interval (in milliseconds).

Syntax:
```js
setInterval(function, milliseconds);
```

Example:

```js
setInterval(() => {
  console.log('This message prints every 2 seconds');
}, 2000);
```

### clearInterval

Stops the interval set by setInterval.
```
clearInterval(intervalId);
```

### Properties:

The function is executed every n milliseconds.

Returns an intervalId to stop the interval.

## setTimeout

The setTimeout method executes a function after a delay (in milliseconds). It only runs once after the delay.

Syntax:
```js
setTimeout(function, milliseconds);
```

Example:
```js
setTimeout(() => {
  console.log('This message prints after 3 seconds');
}, 3000);
```

### clearTimeout

Stops the timeout set by setTimeout.

```
clearTimeout(timeoutId);
```

### Properties:

Executes the function once after n milliseconds.

Returns a timeoutId to stop the timeout.




