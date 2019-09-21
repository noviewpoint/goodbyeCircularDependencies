const modelB = { test: 456 };
const GenericDataHandler = require("./GenericDataHandler");
const DataHandlerForB = class extends GenericDataHandler {};
module.exports = new DataHandlerForB(modelB);