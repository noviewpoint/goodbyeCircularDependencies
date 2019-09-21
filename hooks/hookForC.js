const GenericHook = require("./GenericHook");
const HookForC = class extends GenericHook {
	async do() {
		const a = await this.serviceForA.do();
		const b = await this.serviceForB.do();
		const c = await this.serviceForC.do();
		return `${a.test} ${b.test} ${c.test} from hook calling a service`;
	}
};
module.exports = new HookForC();
