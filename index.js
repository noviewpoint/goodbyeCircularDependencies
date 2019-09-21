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

const hookForA = require("./hooks/hookForA");
const hookForB = require("./hooks/hookForB");
const hookForC = require("./hooks/hookForC");
hookForA.serviceForA = serviceForB;
hookForA.serviceForB = serviceForB;
hookForA.serviceForC = serviceForC;
hookForB.serviceForA = serviceForB;
hookForB.serviceForB = serviceForB;
hookForB.serviceForC = serviceForC;
hookForC.serviceForA = serviceForB;
hookForC.serviceForB = serviceForB;
hookForC.serviceForC = serviceForC;

const db = require("./db");

const init = async () => {
	const a = await serviceForA.do();
	console.log(a.test);
	const b = await serviceForB.do();
	console.log(b.test);
	const c = await serviceForC.do();
	console.log(c.test);

	const bca = await serviceForA.doBCA();
	console.log(bca);
	const acb = await serviceForB.doACB();
	console.log(acb);
	const abc = await serviceForC.doABC();
	console.log(abc);

	const bca_ = await a.do();
	console.log(bca_);
	const acb_ = await b.do();
	console.log(acb_);
	const abc_ = await c.do();
	console.log(abc_);
};

init();

console.log("Done!");
