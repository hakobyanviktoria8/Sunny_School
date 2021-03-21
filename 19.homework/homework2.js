// 2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ:
// Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը: Ստեղծել readStream և highWaterMark:1
// նշելով բոլոր սիմվոլների վրայով անցնել:
// Ծրագիրը աշխատացնել homework4Eng.txt համար:

const fs = require("fs");
let obj = {
    a: "ա",
    b: "բ",
    c: "ց",
    d: "դ"
};

const readStream = fs.createReadStream("./homework4Eng.txt", {
    highWaterMark: 1,
    encoding: "utf8"
});
const writeStream = fs.createWriteStream("./outputhomework4Eng.txt");

readStream.on("data", chunk => {
    chunk = chunk.toLowerCase();
    writeStream.write(obj[chunk] || chunk);
    // console.log(chunk);
});

readStream.on("end", () => {
    console.log("end")
});