const dataHandlerForB = require("../dataHandlers/dataHandlerForB");
const GenericService = require("./GenericService");
const ServiceForB = class extends GenericService {

    async do() {
        return this.dataHandler.model.test;
    }

    async doACB() {
        const a = await serviceForA.do();
        const c = await serviceForC.do();
        const b = await this.do();
        return `${a} ${c} ${b}`;
    }
    
};
module.exports = new ServiceForB(dataHandlerForB);

// circulars:
const serviceForA = require("./serviceForA");
const serviceForC = require("./serviceForC");