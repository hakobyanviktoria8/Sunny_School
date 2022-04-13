//1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է
// 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է 5-ից reject է
// անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։

const random = require("random")

const num = random.int(0,9)

new Promise((resolve, reject)=>{
    console.log(num)
    if(num < 5){
        reject("err")
    } else{
        resolve("success")
    }
})
.then(x=>console.log(x))
.catch(x=>console.log(x))














// const random = require("random");

// function returnPromis() {
//     return new Promise(function (resolve, reject) {
//         let num = random.int(0, 10);
//         console.log(num);

//         if (num < 5) {
//             reject(new Error("Error"))
//         } else {
//             resolve("done")
//         }
//     });
// }

// returnPromis()
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message));
