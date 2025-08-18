console.log(document.body.childNodes[1].childNodes); // Accessing the child nodes of the second child of the body element

let container = document.body.childNodes[1].childNodes; // Accessing the container element

console.log(container.firstElementChild); // Accessing the first child element of the container
console.log(container.lastElementChild); // Accessing the last child element of the container

container.firstElementChild.style.backgroundColor = "red"; // Changing the background color of the first child element

container.lastElementChild.style.backgroundColor = "green"; // Changing the background color of the last child element

console.log(container.childNodes); // Accessing all child nodes of the container

console.log(container.children); // Accessing all child elements of the container

console.log(container.childElementCount); // Counting the number of child elements in the container

console.log(container.children[2].nextElementSibling); // Accessing the next sibling of the third child element

console.log(container.children[2].previousElementSibling); // Accessing the previous sibling of the third child element

console.log(container.children[2].parentElement); // Accessing the parent element of the third child element

console.log(container.children);

console.log(document.body.children[1].rows); // Accessing the rows of the second child of the body element

console.log(document.body.children[1].nextElementSibling); // Accessing the next sibling of the second child of the body element