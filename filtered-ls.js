const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const testExt = "." + process.argv[3];

fs.readdir(dir, (err, list) => {
  if (err) console.log(err);
  else {
    console.log(
      list.filter((file) => path.extname(file) === testExt).join("\n")
    );
  }
});
