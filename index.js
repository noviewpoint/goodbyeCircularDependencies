const config = require("./config");
require("./event");

const serviceForA = require("./services/serviceForA");
const serviceForB = require("./services/serviceForB");
const serviceForC = require("./services/serviceForC");
serviceForA.serviceForB = serviceForB;
serviceForA.serviceForC = serviceForC;
serviceForB.serviceForA = serviceForA;
serviceForB.serviceForC = serviceForC;
serviceForC.serviceForA = serviceForA;
serviceForC.serviceForB = serviceForB;

const init = async () => {
	const a = await serviceForA.do();
	console.log(a);
	const b = await serviceForB.do();
	console.log(b);
	const c = await serviceForC.do();
	console.log(c);

	const bca = await serviceForA.doBCA();
	console.log(bca);
	const acb = await serviceForB.doACB();
	console.log(acb);
	const abc = await serviceForC.doABC();
	console.log(abc);
};

init();

console.log("Done!");
