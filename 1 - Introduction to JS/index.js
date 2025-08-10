console.log("Script loaded successfully!");

let age = 17;

if( age >= 18) {
    console.log("You can drink alcohol.");
}
else {
    console.log("You cannot drink alcohol.");
}

let grace = 2;

console.log(grace ** 2); // Grace period squared

if((age + grace) >= 18) {
    console.log("You can drink alcohol with grace.");
}
else if ((age + grace) < 18) {
    console.log("You still cannot drink alcohol even with grace.");
}
else {
    console.log("Unexpected condition."); 
}

console.log(age % 2); // Check if age is even or odd

let num1 = 10;
let num2 = 20;

let num3 = num1 > num2 ? num1 : num2; // Ternary operator to find the larger number
console.log("The larger number is: " + num3);