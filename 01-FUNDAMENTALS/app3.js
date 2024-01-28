const fs = require("fs");

const content = fs.readFileSync("README.MD", "utf8");
const wordContent = content.split(" ");

//When I'm using filter, I need to pay attention in the arrow function, in this case I don't need to use {}
const reactWordCount = wordContent.filter(
  (word) => word.toLowerCase().includes("react")
).length;

console.log("# Words:", wordContent.length);
console.log("# React words:", reactWordCount);

// This way is the best option
console.log("----------------------------------------------");
const regularExpression = content.match(/react/gi ?? []).length;
console.log("# Words:", wordContent.length);
console.log("# React words:", regularExpression);