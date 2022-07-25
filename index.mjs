import process from "process";

import * as calc from "./es/index.mjs";

const [operation, operand1, operand2] = process.argv.slice(2);

console.log(calc[operation](Number(operand1), Number(operand2)));
