var mymodule = require("./mymodule");
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = (err, list) => {
  if (err) throw err;
  list.forEach((file) => {
    console.log(file);
  });
};

mymodule(dir, filterExtension, callback);
