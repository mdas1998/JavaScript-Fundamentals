const fs = require("fs");
console.log("starting");

// fs.writeFileSync("micheal.txt", "Micheal is the best in the world!") // blocking code, this will execute then only next line will execute. main thread is blocked until its done executing. 

fs.appendFile("hero4.txt", "Micheal also achieved Ultra Instict\n", (error) => {
  if (error) {
    console.error("Error appending:", error);
  } else {
    console.log("Append successful!");

    // Now read the updated file
    fs.readFile("hero4.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("Updated file content:");
      console.log(data);
    });
  }
});
