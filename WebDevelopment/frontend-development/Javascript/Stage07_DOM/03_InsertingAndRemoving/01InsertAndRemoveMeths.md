# Insertion and removal of node and text 

## Insert Method(nodes)
- **Syntax**:
```javascript
let elem = document.createElement("elem")//create a node
elem.innerHTML = " created " // setting a texts
elem.setAttribute("key","value") // setting a attributes 
node.append(elem)//inserting elem in node 
```
- **Example**:
```javascript 
let div = document.createElement("div");
    div.innerHTML = "This div is inserted by JavaScript";
    div.setAttribute("class", "created");

    // Select the .container element and prepend the new div
    document.querySelector(".container").prepend(div);
```

### some metbods
- `node.append(e)`
- `node.prepend(e)`
- `node.before(e)`
- `node.after(e)`
- `node.replacewith(e)`

## remove node
- **Syntax**:
```javascript 
elem.remove();
```
- **Example**:
```javascript
let elem = document.querySelector(".div")
elem.remove()
```




