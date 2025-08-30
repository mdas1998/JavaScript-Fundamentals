import path from "path"

const myPath = "D:\\Micheal\\Learning\\Javascript Foundation\\27 - fs and path modules\\hero.txt"

console.log(path.extname(myPath))
console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("C:/", "programs\\micheal.txt"))