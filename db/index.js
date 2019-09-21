const A = require("./Schemas/SchemaA");
const B = require("./Schemas/SchemaB");
const C = require("./Schemas/SchemaC");

const hookForA = require("../hooks/hookForA");
const hookForB = require("../hooks/hookForB");
const hookForC = require("../hooks/hookForC");

A.test = 123;
A.do = async function(...parameters) {
	return hookForA.do(...parameters);
};
B.test = 456;
B.do = async function(...parameters) {
	return hookForB.do(...parameters);
};
C.test = 789;
C.do = async function(...parameters) {
	return hookForC.do(...parameters);
};

module.exports = {
	models: {
		a: A,
		b: B,
		c: C
	}
};
