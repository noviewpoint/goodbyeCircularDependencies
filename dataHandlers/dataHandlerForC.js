const modelC = { test: 789 };
const GenericDataHandler = require("./GenericDataHandler");
const DataHandlerForC = class extends GenericDataHandler {};
module.exports = new DataHandlerForC(modelC);
