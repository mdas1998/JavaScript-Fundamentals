// add "type" : "module" in package.json for Ecmascript modules

// named import
// import {a} from "./mymodule.js" 
// default import - can be imported with any name
// import obj from "./mymodule.js" 

// console.log(obj);

// console.log(hello);

// Default export code below

// import a from "./mymodule2.js"
const val = require("./mymodule2.js")

console.log(val, __dirname, __filename);