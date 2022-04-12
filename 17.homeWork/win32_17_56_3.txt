//1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը
// (total amount of system memory):
//
const os = require("os");
// console.log(os);
console.log("freemem", os.freemem()/1024);
console.log("totalmem", os.totalmem());



//1kb - 1024byte
//1mb - 1024kb
//1gb - 1024mb