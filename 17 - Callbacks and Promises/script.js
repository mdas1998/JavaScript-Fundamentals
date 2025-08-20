console.log("Micheal is a Hacker");

console.log("Omi is a Hecker");

setTimeout(() => {
  console.log("Inside the setTimeout function")
}, 3000);

console.log("Ravi is not my friend")

const fn = () => {
  console.log("Nothing");
}


const callback = (arg, fn) => {
  console.log(`Your name is ${arg}`);
  fn();
}


const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src= src;
  sc.onload = callback("Micheal", fn);
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// If you call a callback funtion in a callback function in a callback function... it will end up in callback hell that's why we use promises

