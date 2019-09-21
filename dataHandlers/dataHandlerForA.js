const modelA = require("../db").models.a;
const GenericDataHandler = require("./GenericDataHandler");
const DataHandlerForA = class extends GenericDataHandler {};
module.exports = new DataHandlerForA(modelA);
