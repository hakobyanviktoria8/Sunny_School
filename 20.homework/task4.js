// 4.Ունենք const web=['html','css','js','txt'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա:
// Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ նույնը
// լինի(օրինակ html.html) պարունակություն էլ այդ անդամը:

const fs = require("fs");
const web = ['html', 'css', 'js', 'txt'];

//1exanak
// function foo() {
//     fs.mkdir("web", () => {
//         console.log("Done");
//     });
//     web.map(x => fs.writeFile("./web/"+x + "." + x, x, (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("File is updated.");
//         }
//     ))
// }
//
// foo();


//2exanak
async function foo(arr) {
    await fs.mkdir("webAsinq", ()=>{
        arr.map(x=>fs.writeFile("./webAsinq/"+x+"."+x, x, (err)=>{
            if (err){
                console.log(err.message);
            }
        }));
        console.log("done");
    });
}

foo(web)
    .then(data=>{
        console.log("data")
        }
    )
    .catch(err => {
        console.log(err.message)
    });