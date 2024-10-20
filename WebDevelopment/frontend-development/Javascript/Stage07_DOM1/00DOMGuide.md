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
