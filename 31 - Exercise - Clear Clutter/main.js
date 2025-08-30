import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url";  

// Below are extentions for the files which will be organized 
const extentions = ["jpg", "png", "txt", "svg"]

const filesList = []

const __filename = fileURLToPath(import.meta.url);
console.log("__filename is " + __filename);

const __dirname  = path.dirname(__filename);
console.log("__dirname is " + __dirname); 

const files = await fs.readdir(__dirname, {withFileTypes: true});

for (const element of files) {
  const ext = element.name.split(".")[1]
  console.log("extention is " + ext);
  if(extentions.includes(ext)) {
    // create a directory
    const dirPath = path.join(__dirname, ext)
    await fs.mkdir(dirPath, {recursive: true})

    // fetch the old and new path
    const oldPath = path.join(__dirname, element.name);
    const newPath = path.join(dirPath, element.name);

    // move the file 
    await fs.rename(oldPath, newPath);
    console.log(`Moved ${element.name} -> ${dirPath}`)
  }
};

console.log(filesList);




