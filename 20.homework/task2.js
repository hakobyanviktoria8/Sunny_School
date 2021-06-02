// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով, վայրկյանով
// (Օրինակ 10_11_15_32_13.txt):
const fs = require("fs");
const os = require("os");
const date = new Date();
const name = date.getMonth()+"_"+ date.getDay()+1+"_"+date.getHours()+"_"+date.getMinutes();
fs.rename("./"+os.userInfo().username + ".txt", name+".json", (data)=>{
    console.log("Done", data)
});
