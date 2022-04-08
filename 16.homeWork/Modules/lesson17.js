const http = require('http')
const fs = require('fs')

// console.log(http);

// const server = http.createServer((req,res)=>{
//     // console.log("here");
//     // res.end("OKkkkkk")

//     res.writeHead(200,{"ContentType":"application/json"})
//     res.end(JSON.stringify({name:"Viktorya"}))
// })

// server.listen(2021)


// log 3
fs.readFile("../.gitignore",function (err, data){
    if(err){
        return err.message
    }
    console.log(data.toString());
})

// blocking response, log 1
const dataSync = fs.readFileSync("data.json","utf-8")
console.log(dataSync);

// log 2
console.log("test17");