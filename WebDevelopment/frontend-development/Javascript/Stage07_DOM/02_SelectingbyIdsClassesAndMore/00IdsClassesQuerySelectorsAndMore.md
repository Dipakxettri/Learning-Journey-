# JavaScript DOM Selection Methods

## Selecting by ID
- **Syntax**: `document.getElementById("id")`
- **Description**: Selects the element with the specified `id`.
- **Example**:
  ```js
  const element = document.getElementById("myId");
  ```

## Selecting by Class
- **Syntax**: `document.getElementsByClassName("className")`
Description: Returns a live HTMLCollection of elements with the specified `class name`.
-**Example**:
```js
const elements = document.getElementsByClassName("myClass");
```

## Selecting by Tag Name
- **Syntax**: `document.getElementsByTagName("tagName")`
- **Description**: Returns a live HTMLCollection of elements with the specified `tag name`.
- **Example**:
```js
const elements = document.getElementsByTagName("div");
```

## Selecting by Name Attribute
- **Syntax**: `document.getElementsByName("name")`
- **Description**: Returns a NodeList of elements with the specified `name attribute`.
- **Example**:
```js
const elements = document.getElementsByName("username");
```

## Query Selector (CSS Selector)
querySelector
- **Syntax**: `document.querySelector("selector")`
- **Description**: Selects the first element matching the `CSS selector`.
- **Example**:
```js
const element = document.querySelector(".className");
```

## querySelectorAll
- **Syntax**: `document.querySelectorAll("selector")`
- **Description**: Returns a static NodeList of all elements matching the `CSS selector`.
- **Example**:
```js
const elements = document.querySelectorAll("div.myClass");
```

## Comparison Table of DOM Selection Methods

| Method                    | Returns                  | Selects By             |
|---------------------------|--------------------------|-------------------------|
| `getElementById`          | Single Element           | ID                      |
| `getElementsByClassName`  | HTMLCollection (live)    | Class Name              |
| `getElementsByTagName`    | HTMLCollection (live)    | Tag Name                |
| `getElementsByName`       | NodeList (static)        | Name Attribute          |
| `querySelector`           | First Element            | CSS Selector            |
| `querySelectorAll`        | NodeList (static)        | All Matching CSS Selector |

### Note:

HTMLCollection is live; updates automatically with DOM changes.

NodeList from querySelectorAll is static; does not update automatically.