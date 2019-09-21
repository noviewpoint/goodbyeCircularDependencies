const modelA = { test: 123 };
const GenericDataHandler = require("./GenericDataHandler");
const DataHandlerForA = class extends GenericDataHandler {};
module.exports = new DataHandlerForA(modelA);