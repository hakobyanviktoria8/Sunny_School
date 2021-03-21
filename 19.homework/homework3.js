// 3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին:
// _transform մեթոդը վերասահմանել այնպես, որ իր միջով անցնող տեքստից հեռացնել
// հատուկ սիմվոլները:
// Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով
// և պահապանել homeworkw5.txt ֆայլում:

const {Transform} = require("stream");
const fs = require("fs");

class RemoveSpecialChars  extends Transform{
    constructor(){
        super();
    }
    _transform(chunk, encoding, next){
        this.push(chunk.toString().replace(/[^\w\n\s]/g,""));
        next()
    }
}

const removeSpecialChars = new RemoveSpecialChars();

const readStream = fs.createReadStream("./homeworkw5.txt");
const writeStream = fs.createWriteStream("./outputhomeworkw5.txt");


readStream.pipe(removeSpecialChars).pipe(writeStream);

