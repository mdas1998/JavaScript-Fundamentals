console.log("Script loaded successfully!");

var a = 5;
var b = 10;

console.log("The sum of a and b is: " + (a + b));
console.log(typeof a); // Should log "number"

const c = 15;
console.log("The value of c is: " + c);

// c = 20; // This will cause an error because c is a constant
// console.log("The new value of c is: " + c); // This line will not execute due to the error above

{
  let a = 25;
  console.log("The value of a is: " + a); // This will log 25, as 'a' is block-scoped
  
}

console.log(a); // This will log 5, as the outer 'a' is not affected by the block scope

let x = "Micheal";
let y = "Jordan";
let z = "is the GOAT";
let q = undefined;
let r = null;

console.log(x, y, z, q, r); // This will log "Micheal Jordan is the GOAT undefined null"
console.log(typeof x, typeof y, typeof z, typeof q, typeof r);  // This will log "string string string undefined object"

let data = {
  name: "John",
  age: 30,
  isStudent: false
}

console.log("Name is " + data.name + ", Age is " + data.age + ", Is Student: " + data.isStudent);

data.salary = 50000; // Adding a new property to the object
console.log("Updated Data: ", data); // This will log the updated object with the new