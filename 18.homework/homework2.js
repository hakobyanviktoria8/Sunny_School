// 2․ ՈՒնենք config.json ֆայլ, պարունակությամբ ․ Ստեղծել սերվեր ,
// որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
//

// const http = require('http');
// const config = require('./config');
// const host = config.host
// const port = config.port


// const server = http.createServer((req,res)=>{
//     res.writeHead(200);
//     res.end('Hello, World!');
// })
// server.listen(port+20,host);



const fs= require('fs/promises')
const http= require('http')

fs.readFile('./config.json')
.then(data=>{
    const confData = JSON.parse(data.toString())
    console.log(JSON.parse(data.toString()))
    const server = http.createServer((req,res)=>{
        res.end("Done!")
    })
    server.listen(confData.port,confData.host)
})
.catch(err=> console.log(err.messeage))















// const fs = require("fs").promises;
// const http = require("http");

// const server = http.createServer((request, response)=>{
//     response.end("Hello world!");
// });
//
// fs.readFile("./config.json")
//     .then( (data) =>{
//         // console.log(data.toString());
//         let  configData = JSON.parse(data.toString());
//         // console.log(configData);
//         server.listen(configData.port, configData.host)
//     })
//     .catch( (err)=>{
//         throw error.message
//     });


// const config = require("./config");

// const server = http.createServer((req, res) => {
//     res.end("OK")
// }).listen(config.port);

