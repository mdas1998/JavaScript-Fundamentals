// hero.js
import fs from "fs/promises";

let a = await fs.readFile("hero.txt");

let b = await fs.writeFile("hero.txt", "\n This is amazing")
console.log(a.toString());

let c = await fs.appendFile("hero.txt", "Micheal is the best in the world")

