console.log("Hello World");

let bhup = document.getElementsByClassName("box");
console.log(bhup);

bhup[2].style.backgroundColor = "red";

document.getElementById("box4").style.backgroundColor = "blue";
//document.querySelector(".spbox").style.backgroundColor = "green";

document.querySelectorAll(".spbox").forEach((element) => {
    element.style.backgroundColor = "green";
});


e = document.getElementsByTagName("div");
console.log(e);
console.log(e[3].matches(".spbox"));

console.log(e[3].closest(".box"));

console.log(document.querySelector(".container").contains(e[3]));