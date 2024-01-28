const fs = require("fs");

const data = fs.readFileSync("README.MD", "utf8");
const newData = data.replace(/React/ig, "Angular");

fs.writeFileSync("README-Angular.MD", newData);
console.log(data);
