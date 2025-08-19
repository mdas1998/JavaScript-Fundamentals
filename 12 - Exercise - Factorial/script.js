console.log("Hello World");

let a = 6;

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// factorial with reduce 

function factorial(n) {
    let arr = Array.from(Array(n+1).keys()).slice(1);
    return arr.reduce((acc, curr) => acc * curr, 1);   
}

console.log(factorial(a)); // Output: 720
console.log(`The factorial of ${a} is ${factorial(a)}`);