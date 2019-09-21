const lodashGet = require("lodash.get");

const config = {
	a: 123,
	b: 456
};

module.exports = path => lodashGet(config, path, undefined);
