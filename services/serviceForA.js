const dataHandlerForA = require("../dataHandlers/dataHandlerForA");
const GenericService = require("./GenericService");
const ServiceForA = class extends GenericService {

    async do() {
        return this.dataHandler.model.test;
    }

    async doBCA() {
        const b = await this.serviceForB.do();
        const c = await this.serviceForC.do();
        const a = await this.do();
        return `${b} ${c} ${a}`;
    }
    
};
module.exports = new ServiceForA(dataHandlerForA);

// circulars:
// const serviceForB = require("./serviceForB");
// const serviceForC = require("./serviceForC");