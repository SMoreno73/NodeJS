//const getAgePlugin = require("get-age");
//If in the future change this package, I just need to change this package
const getAge = (birthday) => {
  if (!birthday) return new Error("Birthday is required");
  return new Date().getFullYear();
};

module.exports = {
  getAge,
};
