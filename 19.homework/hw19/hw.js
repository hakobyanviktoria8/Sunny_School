const fs = require("fs").promises;

//hw1
// const read = fs.createReadStream("./input.txt", {
//     highWaterMark: 10,
//     encoding: "utf-8"
// });
//
// read.on("data", chunk => {
//         // console.log(chunk.toString().match(/\w/g).join(""));
//     console.log(chunk);
//     console.log((/\w/g).test(chunk));
//     }
// );
//
//
// read.on("end", ()=>{
//     console.log("______end_________");
// });

// //hw2
// const read = fs.createReadStream("./../homework4Eng.txt", {
//     highWaterMark: 1,
//     encoding: "utf-8"
// });
//
// read.on("data", (chunk) => {
//     // console.log(chunk);
//     switch (chunk) {
//         case "a" :
//             console.log("ա");
//             break;
//         case "b" :
//             console.log("բ");
//             break;
//         case "c" :
//             console.log("ց");
//             break;
//         case "d" :
//             console.log("դ");
//             break;
//         default:
//             console.log("default value");
//             break;
//     }
// });
//
// read.on("end", () => {
//         console.log("end");
//     }
// );

// //hw3
// const {Transform} = require("stream");
//
// class RemoveSpecialChars extends Transform {
//     constructor(str) {
//         super();
//     }
//
//     _transform(chunk, encoding, next) {
//         this.push(chunk.toString().replace(/[^a-z0-9]/gi, ""));
//         next()
//     }
//
// }
//
// const rsc = new RemoveSpecialChars();
// const rs = fs.createReadStream("./../homeworkw5.txt");
// rs.pipe(rsc).pipe(fs.createWriteStream("./homeworkr50.txt"));


//hw4

function foo(str) {
    return new Promise((resolve,reject)=>{
        resolve(str=>str.split("/").map(x=>x[0].toUpperCase()+x.slice(1)).join(""))
    })
}
foo("all/main/some/new").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message);
});
