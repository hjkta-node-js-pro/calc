import process from "process";
import EventEmitter from "events";

import * as calc from "./es/index.mjs";

const [operation, operand1, operand2] = process.argv.slice(2);

const evt = new EventEmitter();

for (let func in calc) {
	evt.once(func, ([operand1, operand2]) =>
		evt.emit("result", calc[operation](Number(operand1), Number(operand2)))
	);
}

evt.once("result", (result) => console.log(result));

evt.emit(operation, [operand1, operand2]);
