const { writeFile } = require('fs');

const fs = require('fs').promises
// const fs = require('fs/promises')

// new Promise((resolve, reject)=>{
//     resolve(10)
//     // reject("err")
//     // throw new Error('some text')
// })
// .then(data=>{
//     console.log(data);
//     return {a:11}
// })
// .then(item=>{
//     // console.log(data)
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(item)
//         },3000)
//     })
// })
// .then(x=>{
//     console.log(x)
// })
// .then(()=>console.log("here"))
// .catch(err=>{
//     console.log(err.message)
// }).finally(()=>{
//     console.log("finally")
// })


// fs.readFile("./input.txt")
// .then(x=>fs.writeFile('writeThen11.txt',x.toString()))
// .catch(err=>console.log(err))


// async = new Promise

// async function go1(){
//     return 1
// }

// function go2(){
//     return new Promise(function(resolve,reject){
//         resolve(1)
//     })
// }

// go1().then(x=>console.log(x))
// console.log(go1(), go2());

// setTimeout(function(){
//     console.log("timeout")
// },0)

// Promise { 1 } Promise { 1 }
// 1
// timeout


// Promise.all

Promise.all([
    fs.readFile('./input.txt'),
    fs.readFile('./input1.txt')
]).then(data=>{
    // console.log(data.toString());
    return Promise.all([
        fs.writeFile('./inputWrite.txt',data[0]),
        fs.writeFile('./inputWrite1.txt',data[1])
    ])
}).then(()=>console.log("success"))
.catch(err=>console.log(err))

