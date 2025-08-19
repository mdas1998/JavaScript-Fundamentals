console.log("Hello World");

console.log(document.querySelector(".container").innerText);

console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").outerHTML);

console.log(document.querySelector(".container").tagName); // only applicable to elements
console.log(document.querySelector(".container").nodeName);  // applicable to elements, text nodes, etc.

console.log(document.querySelector(".container").textContent); // gets the text content of the element, including text from child elements  

//document.querySelector(".container").hidden = true; // hides the element

// document.querySelector(".container").innerHTML = "<h1>New Content</h1>"; // replaces the inner HTML of the element

document.querySelector(".container").hasAttribute("class"); // checks if the element has a specific attribute

// document.querySelector(".container").setAttribute("style", "display:inline;"); // sets a  new attribute or updates an existing one

console.log(document.querySelector(".box").attributes); // returns a NamedNodeMap of the attributes of the element

document.querySelector(".box").setAttribute("style", "background-color: red;"); // sets a new style attribute
document.querySelector(".box").removeAttribute("style"); // removes a specific attribute from the element

document.designMode = "on"; // enables design mode for the document, allowing editing of the content

console.log(document.querySelector(".box").dataset);

let div = document.createElement('div');
div.setAttribute('class', 'box');
div.setAttribute('data-createdby', 'Micheal Das');
//document.querySelector('.container').appendChild(div);
document.querySelector('.container').before(div); // Inserts before the container
div.innerText = 'Box 3';

let cont = document.querySelector('.container');
cont.insertAdjacentHTML('afterbegin', '<div class="box" data-createdby="Micheal Das">Box 4</div>'); // Inserts HTML at the beginning of the container

// other values for insertAdjacentHTML:
// 'beforebegin' - Inserts before the element 
// 'afterend' - Inserts after the element
// 'beforeend' - Inserts at the end of the element

document.querySelector('.box').remove(); // Removes the first box element

console.log(document.querySelector('.container').classList); // returns a DOMTokenList of the class names of the element

document.querySelector('.container').classList.add('new-class'); // Adds a new class to the element
document.querySelector('.container').classList.remove('new-class'); // Removes a class from the element
document.querySelector('.container').classList.toggle('new-class'); // Toggles a class on the element