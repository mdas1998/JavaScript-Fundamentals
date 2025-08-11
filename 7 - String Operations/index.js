let a = "Micheal";
console.log(a[0]); // M
console.log(a[1]); // i
console.log(a[2]); // c
console.log(a[3]); // h
console.log(a[4]); // e
console.log(a[5]); // a
console.log(a[6]); // l
console.log(a[7]); // undefined, as there is no 8th character

console.log(a.length); // 7, total number of characters in the string

let firstName = "Micheal";
let lastName = "Scott";
console.log(`My name is ${firstName} ${lastName}`); // Micheal Scott

console.log(firstName.toUpperCase()); // MICHEAL
console.log(firstName.toLowerCase()); // micheal
console.log(firstName.indexOf("c")); // 2, index of first occurrence of 'c'
console.log(firstName.indexOf("z")); // -1, 'z' not found in the string
console.log(firstName.lastIndexOf("c")); // 2, last occurrence of 'c' is also at index 2
console.log(firstName.includes("c")); // true, 'c' is present in the string
console.log(firstName.includes("z")); // false, 'z' is not present in the string
console.log(firstName.startsWith("M")); // true, string starts with 'M'
console.log(firstName.endsWith("l")); // true, string ends with 'l'
console.log(firstName.slice(0, 3)); // Mic, extracts characters from index 0 to 2
console.log(firstName.slice(3)); // heal, extracts characters from index 3 to the end
console.log(firstName.slice(-3)); // eal, extracts last 3 characters
console.log(firstName.slice(1, -1)); // ichae, extracts characters from index 1 to second last character
console.log(firstName.replace("M", "J")); // Jicheal, replaces first occurrence of 'M' with 'J'
console.log(firstName.replaceAll("c", "z")); // Mizheal, replaces all occurrences of 'c' with 'z'
console.log(firstName.replace(/c/g, "z")); // Mizheal, using regex to replace all 'c' with 'z'
console.log(firstName.split("")); // ['M', 'i', 'c', 'h', 'e', 'a', 'l'], splits string into an array of characters
console.log(firstName.split("c")); // ['Mi', 'heal'], splits string into an array at each 'c'
console.log(firstName.split(" ")); // ['Micheal'], splits string into an array at spaces (none in this case)
console.log(firstName.charAt(0)); // M, returns character at index 0
console.log(firstName.charCodeAt(0)); // 77, returns Unicode of character at index 0
console.log(firstName.concat(" ", lastName)); // Micheal Scott, concatenates strings
console.log(firstName.trim()); // Micheal, removes whitespace from both ends (none in this case)
console.log(firstName.trimStart()); // Micheal, removes whitespace from the start (none in this case)
console.log(firstName.trimEnd()); // Micheal, removes whitespace from the end (none in this case)
console.log(firstName.padStart(10, "*")); // *****Micheal, pads the start with '*' to make length 10
console.log(firstName.padEnd(10, "*")); // Micheal****, pads the end with '*' to make length 10
console.log(firstName.repeat(3)); // MichealMichealMicheal, repeats the string 3 times
console.log(firstName.match(/c/g)); // ['c'], returns an array of all matches of 'c'
console.log(firstName.matchAll(/c/g)); // [ [ 'c', index: 2, input: 'Micheal', groups: undefined ] ], returns an iterator of all matches of 'c'
console.log(firstName.search(/c/)); // 2, returns index of first match of 'c'
console.log(firstName.search(/z/)); // -1, returns -1 if 'z' is not found
console.log(firstName.localeCompare("Micheal")); // 0, strings are equal
console.log(firstName.localeCompare("Micheal Scott")); // -1, first string is less than the second
console.log(firstName.localeCompare("Micheal Scott", undefined, { sensitivity: 'base' })); // -1, compares ignoring case and diacritics
console.log(firstName.localeCompare("Micheal Scott", undefined, { numeric: true })); // -1, compares with numeric sorting
console.log(firstName.localeCompare("Micheal Scott", undefined, { usage: 'search' })); // -1, compares for search purposes
console.log(firstName.normalize()); // Micheal, normalizes the string (no changes in this case)

