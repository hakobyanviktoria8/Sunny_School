// 3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա ,
// հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին
// մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:



const fs= require('fs/promises')

async function re(){
  let data11= await fs.readFile('./input.txt','utf-8')
  console.log(data11);
  await Promise.all([
      fs.writeFile('ot1',data11.slice(0,300)),
      fs.writeFile('ot2',data11.slice(300))
  ])
}
re()
.then(x=>console.log("Done!"))
.catch(err=>console.log(err))



// fs.readFile('./input.txt',(err,data)=>{
//     err && console.log(err)
    // console.log(data.toString());
    // const data1 = data.toString().slice(0,data.toString().length/2)
    // const data2 = data.toString().slice(data.toString().length/2)
    // console.log( data.toString().length/2);
    // console.log(data)
// })
// console.log(read);
// Promise.all([data1,data2])
// .then(Promise.all([
//     fs.writeFile('op1'),
//     fs.writeFile('op2')
// ]))
// .then(x=> console.log("Done!"))
// .catch(err=>console.log(err.message))




// const fs = require("fs/promises");

// async function readInput() {
//     let text = await fs.readFile("./input.txt", "utf8");

//     await Promise.all([
//         fs.writeFile("output1.txt", text.slice(0, text.length / 2)),
//         fs.writeFile("output2.txt", text.slice(text.length / 2))
//     ])

// }

// readInput()
//     .then(() => console.log("done"))
//     .catch(err => console.log(err.message));