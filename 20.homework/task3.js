// 3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  ստորակետները
// և կգրի replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:

const fs = require("fs");
const stream = require("stream");

//1 exanak
// fs.readFile("homework3.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err.message);
//     }
//     let newData = data.split(",").join("");
//     fs.writeFile("replace.txt", newData, (err, data) => {
//         if (err) {
//             console.log(err.message);
//         }
//     });
//     fs.unlink("homework3.txt", (err, data) => {
//         if (err) {
//             console.log(err.message);
//         }
//     })
//     // console.log(data);
// });

//2exanak
// async function foo() {
//     const data = await fs.promises.readFile("test11.txt");
//     await fs.promises.writeFile("test.txt", data.toString().replace(/\,/g, ""));
//     await fs.promises.unlink("./test11.txt")
// }
//
// foo()
//     .then(data => console.log("Done"))
//     .catch(err => console.log(err.message));


function streamFunc() {
    const readStr = fs.createReadStream("./test.txt",{
        encoding:"utf-8"
    });
    const writeStr = fs.createWriteStream("./test100.txt");
    readStr.on("data",(chunk => {
        writeStr.write(chunk.toString().replace(/\,/g, ""))
    }));
    // read.pipe(write);
    // console.log("read",read);
}
streamFunc();