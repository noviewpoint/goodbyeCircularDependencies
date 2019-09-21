const dataHandlerForC = require("../dataHandlers/dataHandlerForC");
const GenericService = require("./GenericService");
const ServiceForC = class extends GenericService {

    async do() {
        return this.dataHandler.model.test;
    }

    async doABC() {
        const a = await serviceForA.do();
        const b = await serviceForB.do();
        const c = await this.do();
        return `${a} ${b} ${c}`;
    }
    
};
module.exports = new ServiceForC(dataHandlerForC);

// circulars:
const serviceForA = require("./serviceForA");
const serviceForB = require("./serviceForB");