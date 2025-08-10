console.log("I am a loop!");

// Example of a simple loop

for (let i = 0; i < 5; i++) {
  console.log("Loop iteration:", i);
}

// This loop will run 5 times, logging the current iteration number
// to the console.

// You can modify the loop condition and body to suit your needs
// and create more complex loops as necessary.
// For example, you can use a while loop:
let count = 0;
while (count < 5) {
  console.log("While loop iteration:", count);
  count++;
}

// Example of a for...in loop to iterate over an object
let obj = {
  Micheal: "Center Back", 
  Age: 27
};  

for (const key in obj) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// Example of a for...of loop to iterate over a string
for(const c of "Hello") {
  console.log(c);
}

// Example of do-while loop
let j = 0;  
do {
  console.log("Do-while loop iteration:", j);
  j++;
}while (j < 5);

// Example of a nested loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`Nested loop i: ${i}, j: ${j}`);
  }
}