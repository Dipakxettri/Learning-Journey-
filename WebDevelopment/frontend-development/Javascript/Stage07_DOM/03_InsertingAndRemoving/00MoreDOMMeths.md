# More DOM usefull methods

This document provides concise explanations of essential HTML DOM properties and methods for quick reference.

## 1. innerHTML
- **Description**: Gets or sets the HTML content inside an element.
- **Usage**: `element.innerHTML = "<p>Hello World!</p>";`

## 2. outerHTML
- **Description**: Gets or sets the HTML content of an element, including the element itself.
- **Usage**: `element.outerHTML = "<div><p>Hello World!</p></div>";`

## 3. tagName
- **Description**: Returns the tag name of an element (e.g., `DIV`, `SPAN`).
- **Usage**: `let tag = element.tagName; // Returns "DIV"`

## 4. nodeName
- **Description**: Returns the name of the node, similar to `tagName` but applicable to various node types.
- **Usage**: `let name = element.nodeName; // Returns "DIV"`

## 5. textContent
- **Description**: Gets or sets the text content of an element without any HTML markup.
- **Usage**: `element.textContent = "Hello World!";`

## 6. hidden
- **Description**: Reflects the hidden attribute of an element; if set to `true`, the element is not visible.
- **Usage**: `element.hidden = true;`

## 7. hasAttribute()
- **Description**: Checks if an element has a specified attribute. Returns `true` or `false`.
- **Usage**: `let hasClass = element.hasAttribute("class");`

## 8. setAttribute()
- **Description**: Sets the value of a specified attribute on an element. Creates the attribute if it does not exist.
- **Usage**: `element.setAttribute("data-createdby", "user123");`

## 9. attributes
- **Description**: Returns a NamedNodeMap of all attributes of an element.
- **Usage**: `let attrs = element.attributes; // Access attributes collection`

## 10. removeAttribute()
- **Description**: Removes a specified attribute from an element.
- **Usage**: `element.removeAttribute("data-createdby");`

## 11. designMode
- **Description**: Can be set to `on` or `off` to make the document editable or read-only.
- **Usage**: `document.designMode = "on";`

## 12. data.createdby
- **Description**: Refers to a custom data attribute (e.g., `data-createdby`). Accessed via the `dataset` property.
- **Usage**: `let createdBy = element.dataset.createdby; // Accessing data-createdby`
- 