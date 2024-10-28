# Introduction to the DOM (Document Object Model)

## What is the DOM?
- The **Document Object Model (DOM)** is a programming interface for web documents.
- It represents the structure of an HTML or XML document as a tree of objects, where each part of the document (elements, attributes, and text) is a node in the tree.

## Why is the DOM Important?
- The DOM allows JavaScript (and other languages) to interact with and manipulate the structure, style, and content of a web page dynamically.
- By using the DOM, developers can:
  - Change the content of HTML elements
  - Modify styles and attributes
  - Add, remove, or reorder elements in the document

## Basic Structure of the DOM
- **Root Node**: The `document` object is the root of the DOM tree, representing the entire webpage.
- **Element Nodes**: Each HTML element (`<div>`, `<p>`, `<a>`, etc.) is represented as an object in the DOM.
- **Attributes Nodes**: Attributes within elements, like `class`, `id`, or `href`, are represented as properties.
- **Text Nodes**: Text inside elements is also a node in the DOM.

## Refrences:
[Basic Methods](WebDevelopment/frontend-development/Javascript/Stage07_DOM/00BasicMethods/00BasicMeths.md)