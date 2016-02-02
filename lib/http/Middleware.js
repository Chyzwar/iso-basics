"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
class Middleware {
	constructor(path, next) {
		this.path = path;
		this.next = next;
	}
}
exports.default = Middleware;