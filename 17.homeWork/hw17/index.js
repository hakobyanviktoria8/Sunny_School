const http = require('http');
const fs = require('fs');
const os = require('os');
const util = require("util");
const random = require("random");
// const server = http.createServer(function (req,res) {
//     // console.log('req');
//     res.writeHead(404, {"ContentType":"application/json"});
//
//     res.end(JSON.stringify({name:" Viktorya"}));
// });
//
// server.listen(2020);

// console.log("here1");
// fs.readFile('17.homeWork/hw17/input.txt', function (err, data) {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(data.toString());
// });
//
//
// const datt = fs.readFileSync('17.homeWork/hw17/input.txt', "utf-8");
//
//
// console.log(datt,"_________________________datt");
//
// console.log("here2");

//
// http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-type": "text/plain"});
//     res.end("End")
// }).listen(3000);
//
// const input = fs.readFileSync("17.homeWork/hw17/input.txt", "utf8");
// console.log("input", input);
//
// fs.writeFileSync("17.homeWork/hw17/output.txt", input);
//
// console.log("___________________________________");
//
// fs.readFile("17.homeWork/hw17/input.txt", function (err, data) {
//     if (err){
//         return console.log(err.message)
//     }
    // console.log(data.toString().toUpperCase());
    // fs.writeFile("17.homeWork/hw17/input.txt", data.toString().toUpperCase(), ()=>{
    //     console.log("Done");
    // })
// });


// console.log(fs);

// console.log(os);
// console.log(os.userInfo());

// console.log(util);

//hw1
// console.log(os.totalmem());
//hw2
// console.log(os.networkInterfaces());
//hw3
// const name = random.int(10000000, 99999999);
// fs.writeFile("17.homeWork/hw17/"+name+".txt", JSON.stringify(os.cpus()), ()=>{
//     console.log("Done");
// });
//
// console.log(os.cpus());

//hw4
// fs.readFile("17.homeWork/hw17/input.txt", function (err,data) {
//     if (err){
//         return console.log(err.message)
//     }
//     // console.log(data.toString().replace(" ", "-"));
//     fs.writeFile("17.homeWork/hw17/write.txt",data.toString().split(" ").join("-"), ()=>{
//         console.log("write");
//     })
// });

// console.log(os.platform()+"_"+new Date().getHours()+".txt");
const allhw = os.platform()+"_"+new Date().getHours()+".txt";
const hw1 = fs.readFileSync("17.homeWork/homework1.js","utf8");

fs.writeFile("17.homeWork/hw17/"+allhw, hw1.toString(), ()=>{
    console.log("Done");
});