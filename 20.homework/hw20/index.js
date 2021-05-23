const fs = require('fs');

// fs.readFile('./hw20/file.txt', (err, data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data.toString());
// });


// try {
//     const data = fs.readFileSync('./hw20/file.txt');
//     console.log(data.toString());
// } catch (err) {
//     console.error(err);
// }

//
// fs.readFile("./hw20/file.txt","utf-8",(err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data);
//     fs.writeFile("output.txt", new Date() + data, (data)=>{
//         console.log("data");
//     });
// });
//
//
// const data = "11111This is the new content of the file.";
//
// fs.writeFile('file.txt', data, (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("Data has been written to file successfully.");
// });
//
// fs.appendFile('file.txt', data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File is updated.");
// });


// var buf = new Buffer(1024);
//
// console.log("opening an existing file");
// fs.open('file.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("File opened successfully!");
//     console.log("reading the file");
// });

// fs.rename('file.txt', ' sample.txt',  function (err) {
//     if (err) throw err;
//     console.log('File Renamed.');
// });

// console.log("Going to delete an existing file");
// fs.unlink('./hw20/file.txt', function(err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("File deleted successfully!");
// });

// console.log("Going to create directory /tmp/test");
// fs.mkdir('./test',function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Directory created successfully!");
// });

// console.log("Going to read directory /tmp");
// fs.readdir("/Users/Viktorya/Desktop/Sunny_School/20.homework",
//     function(err, files) {
//     if (err) {
//         return console.log(err);
//     }
//     files.forEach( function (file) {
//         console.log( file );
//     });
// });

// var source = './hw20';
// var destination = 'folderB';
//
// // copy source folder to destination
// fs.copy(source, destination, function (err) {
//     if (err){
//         console.log('An error occured while copying the folder.');
//         return console.log(err)
//     }
//     console.log('Copy completed!')
// });

// console.log("Going to get file info!");
// fs.stat('output.txt', function (err, stats) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(stats);
//     console.log("Got file info successfully!");
//
//     // Check file type
//     console.log("isFile ? " + stats.isFile());
//     console.log("isDirectory ? " + stats.isDirectory());
//
// });


// fs.open("./input.txt", "r+", (err, openFile) => {
//     const buffer = Buffer.alloc(65536);
//     console.log(buffer);
//     fs.read(openFile, buffer, 0, 50, 0, (err, bytesRead) => {
//         console.log(bytesRead);
//         console.log(buffer.slice(0,bytesRead).toString());
//         fs.write(openFile,buffer.slice(0,bytesRead),0,buffer.slice(0,bytesRead).length,()=>{
//
//         })
//     })
// });

// const buffer = Buffer;
// console.log(buffer.alloc(10));


// fs.rename("./input.txt","./input1.txt",()=>{
//     console.log("done");
// });
//
// fs.unlink("./input1.txt",(err)=>{
//     console.log(err.message);
// });
