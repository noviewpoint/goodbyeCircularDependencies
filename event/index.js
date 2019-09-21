const EventEmitter = require("events");

class EnumEventEmitter extends EventEmitter {
	constructor(...parameters) {
		super(...parameters);
		this.EventsEnum = {
			eventA: "a",
			eventB: "b",
			eventC: "c"
        };
	}
}

module.exports = new EnumEventEmitter();