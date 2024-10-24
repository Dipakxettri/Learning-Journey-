## Document Object Model (DOM)

### Overview
- DOM stands for **Document Object Model**.
- Represents the **HTML** or **XML** document as a **tree structure** where every node is an object.
- Allows programming languages to interact with the document, changing its structure, style, and content dynamically.

---

### Common Properties

- **document.title**  
  Gets or sets the title of the document.
  ```javascript
  document.title = "My Page";
  ```

- **document.body**
  Represents the <body> element of the document.
```javascript
document.body.style.backgroundColor = "lightblue";
```

- **document.URL**
  Returns the URL of the current page.
```javascript
console.log(document.URL);
```

- **document.head**
  Represents the <head> element of the document.
```javascript 
console.log(document.head);
```

- **document.forms**
  Returns a collection of all <form> elements in the document.
```javascript 
console.log(document.forms[0].name);
```

- **document.images**
  Returns a collection of all <img> elements in the document.
```javascript 
console.log(document.images.length);
```

- **document.links**
  Returns a collection of all <a> elements with an href attribute (i.e., links).
```javascript
console.log(document.links);
```
