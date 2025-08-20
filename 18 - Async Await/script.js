// async function getData() {
//   // simulate getting data from the server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 53500);
//   });
// }

async function getData() {
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
  return data;
}

async function main() {
  console.log("Loading");
  console.log("Do something else");
  console.log("Load Data");

  let data = await getData();
  console.log(data);
  console.log("Process Data");
  console.log("Task 2");
}

main()

// Now I want that the rest of the code should execute only after the promise is fulfilled.
// There are 2 ways to do that. 1st way is the callback way.

// data.then((v) => {
//   console.log("Rest of the operations");
// });

// second way is async await
// add async in front of the getData function
// add await where you are initializing the instance of the function


// post api 

async function postData(url="", data={}) {
  const response = await fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  return response.json();
}

postData('https://jsonplaceholder.typicode.com/posts',{ title: 'foo',
    body: 'bar',
    userId: 1,}).then((data) => {
      console.log(data);
    });
