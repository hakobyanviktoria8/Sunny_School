const fs = require("fs").promises;
const random = require("random");
// console.log("hi");

// let promise = new Promise(function (resolve,reject) {
//     // resolve(10)
//     throw new Error("Woops!!!")
//
// }).then(function(data) {
//     console.log(data);
//     return {a:11}
// }).then(function (item) {
//     console.log(item);
//     return new Promise(resolve => setTimeout(function () {
//         resolve(20)
//     },1000))
// }).then(function (num) {
//     console.log(num);
// }).catch(function (err) {
//     console.log(err.message);
// });

// fs.readFile("./input.txt",function (err,data) {
//     if (err){
//         console.log(err.message);
//     }
//     console.log(data.toString());
// });

// fs.readFile("./input.txt")
//     .then(function (data) {
//         fs.writeFile("./output.txt", data.toString().toUpperCase());
//         return data;
//     })
//     .then(function (item) {
//         fs.writeFile("./output-.txt", item.toString().replace(/\s/g,"-"))
//
//     })
//     .catch(function (err) {
//     console.log(err.message);
// });

//
// async function foo() {
//     try{
//         const data = await fs.readFile("./input.txt");
//         console.log(data.toString());
//         const io = await fs.writeFile("./io.txt", data.toString().toUpperCase())
//     } catch (e) {
//         console.log(e.message);
//     }
// }
// foo();

// const rd = require("random");
// const num = rd.int(0, 10);
//
// const promise = new Promise(function (resolve, reject) {
//     if (num < 5) {
//         reject(new Error("Small 5"))
//         // throw new Error("les 5")
//     } else {
//         resolve("ok")
//     }
// });

// promise.then(data => console.log(data))
//     .catch(err => console.log(err.message));


// const conf = require("../config");
// console.log(conf);
//
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end('Hello World111111!');
// }).listen(conf.port,conf.host);


// const http = require("http");
// let config = fs.readFile("../config.json").then(data=>{
//     const dataJson = JSON.parse(data.toString());
//     const server = http.createServer((req,res)=>{
//         res.end("Done")
//     }).listen(dataJson.port)
// });

//
// async function foo() {
//     const input = await fs.readFile("./input.txt", "utf8");

    // console.log(input.toString());
    //arancin kgri
    // const  output1 = await fs.writeFile("./output1.txt", input.toString().slice(0,input.toString().length/2));
    // const  output2 = await fs.writeFile("./output2.txt", input.toString().slice(input.toString().length/2));
//
//     await Promise.all([
//         fs.writeFile("./output111.txt",input.toString().slice(0,input.length/2)),
//         fs.writeFile("./output222.txt",input.toString().slice(input.length/2))
//     ])
// }
// foo().then(data => console.log("data"))
//     .catch(err =>  console.log(err.message));
//
// function foo1() {
//     const num = random.int(0,10);
//
//     return new Promise((resolve,reject)=>{
//         if (num < 5){
//             reject( new Error("Num is less then 5"))
//         } else {
//             resolve(num)
//         }
//     } )
// }
// foo1().then(data=> console.log(data))
//     .catch(err => console.log(err.message));

//
// console.log("test1"); //1
//
// setTimeout(()=>{
//     console.log("setTimeout1"); //7
// },1000);
//
// (()=> new Promise(()=>{
//     console.log("Promise");  //2
// }))();
// setImmediate(()=>{
//     console.log("setImmediate"); //6
// });
// setTimeout(()=>{
//     console.log("setTimeout2");  //4
// },0);
//
// (()=> new Promise(()=>{
//     console.log("Promise2");  //3
//     setTimeout(()=>{
//         console.log("setTimeout Promise");  //5
//     },0)
// }))();
//
// process.nextTick(()=>{
//     console.log("nextTick");
// });


setTimeout(() => {
    console.log('timeout');
}, 0);

setImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => {
    console.log('nextTick');
});