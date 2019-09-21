const modelB = require("../db").models.b;
const GenericDataHandler = require("./GenericDataHandler");
const DataHandlerForB = class extends GenericDataHandler {};
module.exports = new DataHandlerForB(modelB);
