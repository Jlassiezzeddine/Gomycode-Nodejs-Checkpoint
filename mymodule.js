var fs = require("fs");
var path = require("path");

const mymodule = (directory, extension, callback) => {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);
    else {
      list = list.filter((file) => {
        if (path.extname(file) === "." + extension) return true;
      });
      return callback(null, list);
    }
  });
};

module.exports = mymodule;
