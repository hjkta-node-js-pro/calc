const process = require("process");

const { add, divide, multiply, subtract } = require("./cjs/index.js");

const [operation, operand1, operand2] = process.argv.slice(2);

const calc = {
	add: add,
	divide: divide,
	multiply: multiply,
	subtract: subtract,
};

console.log(calc[operation](Number(operand1), Number(operand2)));
