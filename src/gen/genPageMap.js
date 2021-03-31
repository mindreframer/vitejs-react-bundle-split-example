const fg = require("fast-glob");
const fs = require("fs");

let entries = fg.sync(["./src/pages/**/*Page*.tsx"], {
  dot: true,
});
console.log(entries);

entries = entries.map((item) => item.replace("./src/", "./"));
let lines = [];

lines.push("/**** DO NOT EDIT BY HAND! RUN `yarn gen:pageMap` ****/");
lines.push("");
lines.push(`export const pagesMap = {`);
entries.forEach((item) => {
  let name = item.match(/^\.\/pages\/(.*)\.tsx$/)[1].toLocaleLowerCase();
  lines.push(`  ${name}: "${item}",`);
});
lines.push("};");

// console.log(lines.join("\n"));
console.log("WRITING TO src/pagesMap.ts");
fs.writeFileSync("src/pagesMap.ts", lines.join("\n"));
