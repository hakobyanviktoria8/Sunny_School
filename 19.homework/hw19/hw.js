const fs = require("fs").promises;
const {Transform} = require("stream");

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
// const obj ={
//     a:"ա",
//     b:"բ",
//     c:"ց",
//     d:"դ"
// };
// const read = fs.createReadStream("./../homework4Eng.txt", {
//     highWaterMark: 1,
//     encoding: "utf-8"
// });
//
// const writeStream  = fs.createWriteStream("hw2.txt");

//1 exanak read.on vercnel datan u chunkerov grel writeStream
// read.on("data", (chunk => {
//     writeStream.write(obj[chunk] || chunk)
// }));

//2exanak
// const tr = new Transform({
//     transform(chunk, encoding, next){
//         this.push(obj[chunk] || chunk);
//         next()
//     }
// });
//
// read.pipe(tr).pipe(writeStream);

//3exanak
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
//
// class RemoveSpecialChars extends Transform {
//     _transform(chunk, encoding, next) {
//         this.push(chunk.toString().replace(/[^a-z0-9]/gi, ""));
//         next()
//     }
//
// }
//
// const rsc = new RemoveSpecialChars();
// const rs = fs.createReadStream("./../homeworkw5.txt");
// rs.pipe(rsc).pipe(fs.createWriteStream("./homeworkr500.txt"));


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


async function foo(path) {
    const data = (await  fs.readFile(path)).toString();
    // const newData = data.split(" ").map(x=>x[0].toUpperCase()+x.slice(1).toLowerCase()).join(" ");
    await fs.writeFile("hw4.txt",data)
}
foo("./wr.txt")
    .then(data=>console.log("data"))
    .catch(err=> console.log(err.message));