const {Readable,Writable,Transform} = require("stream");
const fs = require("fs");
console.log("start");
// process.on('exit', code => {
//     setTimeout(() => {
//         console.log('Will not get displayed');
//     }, 0);
//
//     console.log('Exited with status code:', code);
// });
// console.log('Execution Completed');


// const readStream = fs.createReadStream("./input.txt",{
//     highWaterMark : 5
// });
//
// const writeStream = fs.createWriteStream("./output.txt");
// // console.log(readStream);
// readStream.on("data", function (chunk) {
//     // console.log(chunk.toString());
//     writeStream.write(chunk.toString())
// });



// new Readable({
//     read(size){
//         this.push("")
//     }
// });
//
// new Writable({
//     write(chunk,encoding,callback){
//
//     }
// })

//
// fs.createReadStream("./input.txt").on("data", function (chunk) {
//     fs.createWriteStream("output1.txt").write(chunk.toString().toUpperCase())
// });

// const read =  fs.createReadStream("./input.txt");
// const write = fs.createWriteStream("output11.txt");
// //michankyal popoxutyan hamar
// const transform = new Transform({
//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toUpperCase());
//         console.log(chunk.toString());
//         callback();
//     }
// });
// read.pipe(transform).pipe(write);


// const zlib = require("zlib");
// // console.log(zlib);
// const gzip = zlib.createGzip();
// // console.log(gzip);
// const read =  fs.createReadStream("./input.txt");
// const write = fs.createWriteStream("./output.gz");
//
// read.pipe(gzip).pipe(write);


//
// process.stdin.on("data",function (data) {
//     console.log(data.toString());
// });
//
// const transform = new Transform({
//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toUpperCase());
//         console.log(chunk.toString());
//         callback();
//     }
// });
//
// process.stdin.pipe(transform).pipe(process.stdout);
//
//
// const wr = fs.createWriteStream("wr.txt");
// process.stdin.pipe(transform).pipe(wr);


//
// new Readable({
//     read(size) {
//         this.push('')
//     }
// });
// new Writable({
//     write(chunk, encoding, callback) {
//
//     }
// });
//
//
// class ArrayReadable extends Readable {
//     constructor(array) {
//         super();
//         this.array = array;
//         this.index = 0;
//     }
//
//     _read(size) {
//         if (this.index < this.array.length) {
//             this.push(this.array[this.index].toString());
//             this.index++;
//         } else {
//             this.push(null);
//         }
//     }
// }
//
// const customStream = new ArrayReadable([1, 2, 3, 4]);
//
// customStream.on('data', (item) => {
//     console.log(item.toString());
// });
//
// customStream.on('end', () => {
//     console.log('end');
// });

// const inStream = new Readable();
//
// inStream.push('ABCDEFGHIJKLM');
// inStream.push('NOPQRSTUVWXYZ');
//
// inStream.push(null);
//
// inStream.pipe(process.stdout);

// const readableStream = fs.createReadStream('./article.md', {
//     highWaterMark: 1024
// });
//
// readableStream.on('data', (chunk) => {
//
//     console.log('chunk',chunk.toString());
//     fs.createWriteStream("ot.txt").write(chunk.toString())
//
// });
// readableStream.on('end', () => {
//     console.log('DONE');
// });



//
// const file = fs.createWriteStream('./file.txt');
// for (let i = 0; i < 10; i++) {
//     file.write('Hello world ' + i +"\n");
// }
// file.end();


// const upperCaseTr = new Transform({
//   transform(chunk, encoding, callback) {
//       this.push(chunk.toString().toUpperCase());
//       callback();
//   }});


// process.stdin.pipe(fs.createWriteStream("./alll.txt"));


//
// var zlib = require('zlib');
//
// var gzip = zlib.createGzip();
// var rstream = fs.createReadStream('myfile.txt');
// var wstream = fs.createWriteStream('myfile.txt.gz');
//
// rstream   // reads from myfile.txt
//   .pipe(gzip)  // compresses
//   .pipe(wstream)  // writes to myfile.txt.gz
//   .on('finish', function () {  // finished
//     console.log('done compressing');
//   });
//




