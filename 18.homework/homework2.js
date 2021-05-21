// 2․ ՈՒնենք config.json ֆայլ, պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված
// հոսթին և պորտին։
//

const fs = require("fs").promises;
const http = require("http");

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


const config = require("./config");

const server = http.createServer((req, res) => {
    res.end("OK")
}).listen(config.port);

