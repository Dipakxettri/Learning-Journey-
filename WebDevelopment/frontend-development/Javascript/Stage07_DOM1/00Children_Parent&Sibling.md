# DOM Tree Navigation Methods

## Child Nodes
- **`element.childNodes`**:
 Returns a live NodeList of all child nodes (including text nodes).
  ```javascript
  const childNodes = parentElement.childNodes;
  console.log('Child Nodes:', childNodes);
  ```
- **`element.childNodes[index]`**: 
 Accesses a specific child node by index.
```javascript 
const secondChild = parentElement.childNodes[1];
console.log('Second Child Node:', secondChild);
```
- **`element.childNodes[1].childNodes`**: Retrieves child nodes of the second child.
```javascript 
const secondChildNodes = parentElement.childNodes[1].childNodes;
console.log('Child Nodes of Second Child:', secondChildNodes);
```

## Text Nodes
Text nodes can be included in childNodes. To avoid greeting text nodes, use only Element nodes.
```javascript 
const childElements = parentElement.children; // Only HTML elements
console.log('Children (Only Elements):', childElements);
```
also can give a index like `children[index]`

## First and Last Child
- **`element.firstChild`**:
 Returns the first child node (can be a text node).
```javascript
const firstChild = parentElement.firstChild;
console.log('First Child Node:', firstChild);
```
- **`element.lastChild`**: 
 Returns the last child node (can be a text node).
```javascript 
const lastChild = parentElement.lastChild;
console.log('Last Child Node:', lastChild);
```
Use `element.firstElementChild` and `element.lastElementChild` to get the first and last child elements, respectively, ignoring text nodes.
```javascript 
const firstElementChild = parentElement.firstElementChild;
console.log('First Element Child:', firstElementChild);
```
```javascript
const lastElementChild = parentElement.lastElementChild;
console.log('Last Element Child:', lastElementChild);
```

## Parent Node

- **`element.parentNode`**: 
 Returns the parent node of the specified element.
```javascript 
const parentNode = secondChild.parentNode;
console.log('Parent Node:', parentNode);
```
- **`element.parentElement`**:
 Returns the parent element, ignoring non-element nodes.
```javascript 
const parentElementNode = secondChild.parentElement;
console.log('Parent Element:', parentElementNode);
```

## Siblings

### Next Sibling:

- **`element.nextSibling:`**
 Retrieves the next sibling node (may include text nodes).
```javascript 
const nextSibling = secondChild.nextSibling;
console.log('Next Sibling Node:', nextSibling);
```
- **`element.nextElementSibling`**: 
 Retrieves the next sibling element, ignoring text nodes.
```javascript 
const nextElementSibling = secondChild.nextElementSibling;
console.log('Next Element Sibling:', nextElementSibling);
```

### Previous Sibling:

- **`element.previousSibling`**: Retrieves the previous sibling node (may include text nodes).

```javascript
const previousSibling = secondChild.previousSibling;
console.log('Previous Sibling Node:', previousSibling);
```
- **`element.previousElementSibling:`** Retrieves the previous sibling element, ignoring text nodes.
```javascript
const previousElementSibling = secondChild.previousElementSibling;
console.log('Previous Element Sibling:', previousElementSibling);
```






