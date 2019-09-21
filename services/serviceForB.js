const dataHandlerForB = require("../dataHandlers/dataHandlerForB");
const GenericService = require("./GenericService");
const helpers = require("../helpers");
const ServiceForB = class extends GenericService {
	async do() {
		await helpers.sleep(200);
		return this.dataHandler.model;
	}

	async doACB() {
		const a = await this.serviceForA.do();
		const c = await this.serviceForC.do();
		const b = await this.do();
		return `${a.test} ${c.test} ${b.test} from service`;
	}
};
module.exports = new ServiceForB(dataHandlerForB);

// circulars:
// const serviceForA = require("./serviceForA");
// const serviceForC = require("./serviceForC");
