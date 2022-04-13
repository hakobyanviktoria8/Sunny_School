const Stream = require('stream')
const fs = require('fs')

// console.log(Stream);

// read file and has data, then transfer(send) data 
// data poxancox
// Stream.Readable

// give data and change it, write,update,   
//data @ndunox      
// Stream.Writable

// data poxancox u vercnox  Readable + Writable
// Stream.Duplex

// datan poxelu hamar
// Stream.Transform


const readStream = fs.createReadStream('./inputStream.txt',{
    highWaterMark: 4
})
// console.log(readStream); big obj

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString());
// })
// readStream.on('end', () => {
//     console.log('DONE');
// });


// we can import that's way
const {Readable,Writable,Duplex,Transform} = require('stream')

// new Readable({
//     read(size){
//         this.push("")
//     }
// })

// new Writable({
//     read(size){
//         this.push("")
//     }
// })

const inStream = new Readable()

inStream.push('ABCDEFGHIJKLM');
inStream.push('NOPQRSTUVWXYZ');

inStream.push(null); // No more data

inStream.pipe(process.stdout);
