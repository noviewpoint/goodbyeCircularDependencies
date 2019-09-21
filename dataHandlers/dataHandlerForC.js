const modelC = require("../db").models.c;
const GenericDataHandler = require("./GenericDataHandler");
const DataHandlerForC = class extends GenericDataHandler {};
module.exports = new DataHandlerForC(modelC);
