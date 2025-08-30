const fs = require("fs");

fs.writeFile("hero1.txt", "Micheal is the super saiyan", () => {
  console.log("Done");
  fs.readFile("hero1.txt", (error, data) => {
    console.log(error, data.toString());
  });
  fs.writeFile("hero2.txt", "Micheal is the super saiyan 2", () => {
    console.log("Done");
    fs.readFile("hero2.txt", (error, data) => {
      console.log(error, data.toString());
    });
    fs.writeFile("hero3.txt", "Micheal is the super saiyan 3", () => {
      console.log("Done");
      fs.readFile("hero3.txt", (error, data) => {
        console.log(error, data.toString());
      });
      fs.writeFile("hero4.txt", "Micheal is the super saiyan god", () => {
        console.log("Done");
        fs.readFile("hero4.txt", (error, data) => {
          console.log(error, data.toString());
        });
      });
    });
  });
});
