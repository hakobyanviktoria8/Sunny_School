//1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:
const  fs = require("fs");
const  os = require("os");
fs.writeFile(os.userInfo().username + ".json",JSON.stringify(os.userInfo()), (err)=>{
    if (err){
        console.log(err.message)
    }
});
console.log(os.userInfo());