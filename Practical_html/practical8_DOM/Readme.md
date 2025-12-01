Exercise 1 - Exploring DOM
You will build a simple interactive web page that demonstrates DOM access, traversal, and manipulation

Part 1: Basic Structure
Create an index.html file and add the following structure:

<!DOCTYPE html>
<html>
<head>
  <title>DOM Practice</title>
  <style>
    body { font-family: Arial; margin: 20px; }
    .highlight { color: crimson; font-weight: bold; }
    .box { padding: 10px; border: 1px solid #ccc; margin-top: 10px; }
  </style>
</head>
<body>
  <h1 id="main-title">My DOM Playground</h1>
  <p class="content">This is paragraph one.</p>
  <p class="content">This is paragraph two.</p>

  <div id="container" class="box">
    <h3>Container Section</h3>
    <p>This is inside a container.</p>
  </div>

  <button id="changeTextBtn">Change Text</button>
  <button id="addElementBtn">Add New Element</button>
  <button id="removeElementBtn">Remove Last Element</button>

  <script src="script.js"></script>
</body>
</html>
Part 2: Write JavaScript (in script.js)
Practice these concepts step by step:

Selecting Elements
const title = document.getElementById("main-title");
const paragraphs = document.getElementsByClassName("content");
const container = document.getElementById("container");
Traversing the DOM
console.log(container.parentElement);      // parent of container
console.log(container.children);           // all children
console.log(container.firstElementChild);  // first child element
Manipulating the content
title.textContent = "Welcome to the DOM Practice!";
paragraphs[0].style.color = "green";
Adding Event Listeners
document.getElementById("changeTextBtn").addEventListener("click", () => {
  title.textContent = "Text Changed via Button Click!";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "New paragraph added!";
  newPara.classList.add("highlight");
  container.appendChild(newPara);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
  const lastChild = container.lastElementChild;
  if (lastChild && lastChild.tagName === "P") {
    container.removeChild(lastChild);
  }
});
Optional Challenge:
Add a new button:

When clicked, it toggles a class (highlight) on all <p> elements to change their color.