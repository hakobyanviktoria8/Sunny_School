//1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը
// (total amount of system memory):
//
const os = require("os");
console.log(os);
console.log("freemem", os.freemem());
console.log("totalmem", os.totalmem());