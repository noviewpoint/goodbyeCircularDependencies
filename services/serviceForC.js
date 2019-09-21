const dataHandlerForC = require("../dataHandlers/dataHandlerForC");
const GenericService = require("./GenericService");
const helpers = require("../helpers");
const ServiceForC = class extends GenericService {
	async do() {
		await helpers.sleep(300);
		return this.dataHandler.model;
	}

	async doABC() {
		const a = await this.serviceForA.do();
		const b = await this.serviceForB.do();
		const c = await this.do();
		return `${a.test} ${b.test} ${c.test} from service`;
	}
};
module.exports = new ServiceForC(dataHandlerForC);

// circulars:
// const serviceForA = require("./serviceForA");
// const serviceForB = require("./serviceForB");
