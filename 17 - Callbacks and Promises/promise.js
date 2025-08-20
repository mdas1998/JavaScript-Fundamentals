alert('Hello world');
console.log('This is promises');

let prom1 = new Promise((resolve, reject)=> {
  let a = Math.random();
  if (a < 0.5) {
    reject("Invalid Random Number");
  }
  else {
    setTimeout(() => {
      console.log("Yes I am done")
      resolve("Micheal");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject)=> {
  let a = Math.random();
  if (a < 0.5) {
    reject("Invalid Random Number 2");
  }
  else {
    setTimeout(() => {
      console.log("Yes I am done 2")
      resolve("Micheal 2");
    }, 1000);
  }
});

// prom1.then((a) => {
//   console.log(a);
// }).catch((err) => {
//   console.log(err);  
// }).finally(() => {
//   console.log('Promises execution complete. Closing all files');  
// });


// Using Promise.all to wait for both prom1 and prom2 to resolve or any to reject
// Promise.all([prom1, prom2])
//   .then((results) => {
//     // This block runs if both promises resolve successfully
//     console.log('Both promises resolved:', results);
//   })
//   .catch((error) => {
//     // This block runs if any promise is rejected
//     console.log('At least one promise rejected:', error);
//   })
//   .finally(() => {
//     // This block runs after all promises settle (either resolve or reject)
//     console.log('Promise.all execution complete.');
//   });

// Promise.allSettled([prom1, prom2])
//   .then((results) => {
//     // This block runs if both promises resolve successfully
//     console.log('Both promises resolved:', results);
//   })
//   .catch((error) => {
//     // This block runs if any promise is rejected
//     console.log('At least one promise rejected:', error);
//   })
//   .finally(() => {
//     // This block runs after all promises settle (either resolve or reject)
//     console.log('Promise.all execution complete.');
//   });

Promise.race([prom1, prom2])
  .then((results) => {
    // This block runs if both promises resolve successfully
    console.log('Both promises resolved:', results);
  })
  .catch((error) => {
    // This block runs if any promise is rejected
    console.log('At least one promise rejected:', error);
  })
  .finally(() => {
    // This block runs after all promises settle (either resolve or reject)
    console.log('Promise.all execution complete.');
  });