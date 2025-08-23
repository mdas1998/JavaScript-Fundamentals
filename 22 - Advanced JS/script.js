async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000)
  });
}
// IIFE - function which is immediately invoked

(async function main() {
  let a = await sleep()
  console.log(a);
  let b = await sleep()
  console.log(b);

  // Destructuring 
  let [x, y, ...rest] = [1,5,7, 6,7,8,9]
  console.log(x, y, rest)

  let obj = {
    n1:1, 
    n2:2
  }
  let {n1, n2} = obj
  console.log(n1, n2);

  // variable name inside object and while Destructuring should be the same

  // spread syntax

  function sum(a, b, c) {
    return a + b + c
  }

  let arr1 =    [1, 4, 6]
  // console.log(arr[0] + arr[1] + arr[2])
  console.log(sum(...arr1))
})()

