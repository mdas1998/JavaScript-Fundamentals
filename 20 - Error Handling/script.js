let a = prompt("Enter a number");
let b = prompt("Enter a second number");

if(isNaN(a) || isNaN(b)) {
  throw SyntaxError("The value of a or b is not a number");
}
let sum = parseInt(a) + parseInt(b);

function main(x) {
  try {
    console.log("The sum is " + sum + x);
    return true;
  }
  catch (err) {
    console.log(err);
    return false;
  }
  finally {
    console.log('Closing the DB connection and closing all the files');
  }
}

let c = main(4)
console.log('The main function returned ' + c);

