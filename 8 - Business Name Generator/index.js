/*  
Adjectives: Crazy, Amazing, Fire, Super, Mega, Ultra, Hyper, Epic, Awesome, Fantastic
Nouns: Solutions, Innovations, Creations, Ventures, Concepts, Designs, Ideas, Works, Systems, Strategies
Another word for "business": Enterprise, Company, Firm, Corporation, Startup, Organization, Agency, Group, Collective
*/


var adjectives = "Crazy, Amazing, Fire, Super, Mega, Ultra, Hyper, Epic, Awesome, Fantastic";
var nouns = "Solutions, Innovations, Creations, Ventures, Concepts, Designs, Ideas, Works, Systems, Strategies";
var businessWords = "Enterprise, Company, Firm, Corporation, Startup, Organization, Agency, Group, Collective";

var adjArr = adjectives.split(", ");
var nounArr = nouns.split(", ");
var bizArr = businessWords.split(", "); 

var randomAdj = adjArr[Math.floor(Math.random() * adjArr.length)]; // Randomly select an adjective
var randomNoun = nounArr[Math.floor(Math.random() * nounArr.length)]; // Randomly select a noun
var randomBiz = bizArr[Math.floor(Math.random() * bizArr.length)]; // Randomly select a business word

console.log(randomAdj + " " + randomNoun + " " + randomBiz);