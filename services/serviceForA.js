const dataHandlerForA = require("../dataHandlers/dataHandlerForA");
const GenericService = require("./GenericService");
const helpers = require("../helpers");
const ServiceForA = class extends GenericService {
	async do() {
		await helpers.sleep(100);
		return this.dataHandler.model;
	}

	async doBCA() {
		const b = await this.serviceForB.do();
		const c = await this.serviceForC.do();
		const a = await this.do();
		return `${b.test} ${c.test} ${a.test} from service`;
	}
};
module.exports = new ServiceForA(dataHandlerForA);

// circulars:
// const serviceForB = require("./serviceForB");
// const serviceForC = require("./serviceForC");
