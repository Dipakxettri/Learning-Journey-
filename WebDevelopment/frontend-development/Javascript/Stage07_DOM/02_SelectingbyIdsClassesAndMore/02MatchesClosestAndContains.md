# JavaScript `matches`, `closest`, and `contains` Methods

## `matches` Method
- **Syntax**: `element.matches("selector")`
- **Description**: Checks if the element would be selected by the given CSS selector. Returns `true` if it matches; otherwise, `false`.
- **Example**:
  ```js
  const element = document.querySelector(".myElement");
  if (element.matches(".myClass")) {
    console.log("Element has the class 'myClass'");
  }
  ```

## `closest` Method
- **Syntax**: `element.closest("selector")`
- **Description**: Starts from the given element and traverses up the DOM tree until it finds the closest ancestor (or itself) that matches the specified selector. Returns `null` if no matching ancestor is found.
- **Example**:
```js
const element = document.querySelector(".myElement");
const closestDiv = element.closest("div");
console.log(closestDiv); // Logs the closest <div> ancestor or itself
```

## `contains` Method
- **Syntax**: `parentNode.contains(childNode)`
- **Description**: Checks if a parentNode contains the specified childNode. Returns `true` if it does; otherwise, `false`.
- **Example**:
```js
const parent = document.getElementById("parentElement");
const child = document.getElementById("childElement");
console.log(parent.contains(child)); // true if 'childElement' is inside 'parentElement'
```

## Summary Table of `matches`, `closest`, and `contains` Methods

| Method     | Purpose                                                | Return Type         |
|------------|--------------------------------------------------------|---------------------|
| `matches`  | Checks if an element matches a CSS selector            | `Boolean`           |
| `closest`  | Finds the nearest ancestor that matches a CSS selector | Element or `null`   |
| `contains` | Checks if a node contains another specified node       | `Boolean`           |