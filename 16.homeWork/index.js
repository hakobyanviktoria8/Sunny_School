// const randomFunc = require("./homework2");
// const hommework1 = require("./homework1");
// const hw2= require("./homework2");
//1. Ստեղծել homework1.js ֆայլ որը աշխատեցնելուց հետո __filename գլոբալի  միջոցով console-ում արտածել
// ֆայլի բացարձակ ճանապարը և  ճանապարհի անվան երկարությունը
// hommework1;
// console.log("Sunny School");
// console.log(__filename);
// console.log(__dirname);

// 2. Ստեղծել package.json  ֆայլ որը կունենա  home2.jpg տեսքը, որտեղ author դիմաց
// կլինի Ձեր անուն ազգանունը: homework2.js ֆայլի միջոցով օգտագործելով random փաթեթը
//  console-ում արտածել 5 պատհական int արժեքներ 0 - 100 միջակայքում:
//
// console.log(randomFunc());

// console.log(hw2());
// 3. Modules պապակայում ստեղծել currentTime մոդուլ currentTime ֆունկցիայով
// որը արտածում է  կանչելու պահին ժամը, րոպեն ,վարկյանը և միլիվայրկյանը :
// Մոդուլը ներմուծել homework3.js ֆայլում և կանչել currentTime ֆունկցիավ  ու
// արդյունքը արտածել console-ում:
//
// const currentTime = require("./homework3/currentTime");
// console.log(currentTime());
//see homework3 file

// 4.Modules պապակայում ստեղծել wordsFromString մոդուլ wordsFromString ֆունկցիայով
// որը տրված նախադասությունից console-ում  արտածում է այն բառերը որոնք չունեն հատուկ սիմվոլ:
// Մոդուլը ներմուծել homework4.js ֆայլում և wordsFromString ֆունկցիավ կանչել որևէ նախադասության համար:
//
//
//see homework4 file
const wordsFromString =  require("./homework4/wordsFromString");
let str="AMPL!ESThe follo@wing sequence checks out t#he master branch.";
console.log(wordsFromString(str));

// 5.Modules պապակայում ստեղծել charOneSecondOutput մոդուլ charOneSecondOutput ֆունկցիայով
// որը console-ում  արտածում է ֆունկցիային տրված բառի տառերը 1 վայրկյան պարբերությամբ:
// Մոդուլը ներմուծել homework5.js ֆայլում և charOneSecondOutput ֆունկցիա կանչել Ձեր անուն ազգանունից
// կազմված բառակապակցության համար :

const charOneSecondOutput = require("./homework5/charOneSecondOutput");
charOneSecondOutput("Viktorya");