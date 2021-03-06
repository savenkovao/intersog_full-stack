var phrases = require('./ru');

function User(name) {
	this.name = name;
}

User.prototype.hello = function (who) {
	console.log("hello, " + who.name);
	console.log(phrases.Hello + ", " + who.name);
}

console.log("user.js is required");

// exports

exports.User = User;

//глобальный объект в ноде = global
// действительно глобальные переменные и методы записываются в него
global.User = User;


console.log(module);