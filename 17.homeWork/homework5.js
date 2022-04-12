// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի
// պարունակությունը(Օրինակ homework1.js, homework2.js, homework3.js, homework4.js):
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի
// անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:


const fs = require('fs')
const os = require('os')
let h = new Date().getHours()
let m =  new Date().getMinutes()
let s =  new Date().getSeconds()
let n= os.platform()
let name = `${n}_${h}_${m}_${s}.txt`
const readFileHw = fs.readFileSync('./homework1.js') +  fs.readFileSync('./homework2.js')

fs.writeFileSync(name, readFileHw)   


















// const fs = require("fs");
// const os = require("os");
// const hour = new Date().getHours();
// const min = new Date().getMinutes();
// const sec = new Date().getSeconds();
// const name = `${os.platform()}_${hour}_${min}_${sec}`;

// const dataFile = fs.readFileSync("./homework1.js")+fs.readFileSync("./homework2.js")+fs.readFileSync("./homework3.js")+fs.readFileSync("./homework4.js");

// fs.writeFileSync(`${name}.txt`, dataFile);



