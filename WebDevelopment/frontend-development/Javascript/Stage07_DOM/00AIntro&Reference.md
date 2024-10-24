# Document Object Model (DOM) Overview

The **Document Object Model (DOM)** is a programming interface for HTML and XML documents. It represents the page structure as a tree of objects, allowing scripts to manipulate its content, structure, and style.
![Alt text for the image](https://github.com/Dipakxettri/FullStackWebDev.git)

## Key Concepts

1. **DOM Tree Structure**:
   - The document is represented as a tree of nodes.
   - **Nodes**: Elements (tags), text, and attributes in the HTML document.
   - Root node: `document` object.

2. **Node Types**:
   - **Element nodes**: HTML tags like `<div>`, `<p>`.
   - **Text nodes**: Actual text inside elements.
   - **Attribute nodes**: Attributes of elements like `class`, `id`.
3. **Basic Methods**: Basic Methods Like changing Title, greeting Title,body and changing style.
   


4. **Accessing DOM Elements**:
   - `document.getElementById('id')`: Select element by ID.
   - `document.getElementsByClassName('class')`: Select elements by class name.
   - `document.getElementsByTagName('tag')`: Select elements by tag name.
   - `document.querySelector('selector')`: Select the first matching element.
   - `document.querySelectorAll('selector')`: Select all matching elements.

5. **Modifying the DOM**:
   - **Change content**: `element.innerHTML = 'New Content'`
   - **Change style**: `element.style.property = 'value'`
   - **Add/Remove elements**:
     - `document.createElement('tag')`: Create new element.
     - `parent.appendChild(child)`: Add new element.
     - `parent.removeChild(child)`: Remove an element.

6. **Event Handling**:
   - **Add event listener**: `element.addEventListener('event', function)`
   - Common events: `click`, `mouseover`, `keydown`, etc.

7. **Traversing the DOM**:
   - **Parent node**: `element.parentNode`
   - **Child nodes**: `element.childNodes` / `element.children`
   - **Sibling nodes**: `element.nextSibling`, `element.previousSibling`

## Example
```html
<div id="demo">Hello World</div>

<script>
  const element = document.getElementById('demo');
  element.innerHTML = "Hello DOM!";
</script>
```
