const fs = require("fs");
const text=fs.readFileSync("node.txt","utf-8");

console.log("The content of file is:....");
console.log(text);