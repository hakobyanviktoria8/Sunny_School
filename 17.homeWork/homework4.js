// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը ,
// որից հետո այդ պարունակության բոլոր բացատները կփոխարին - ներով:
// Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:
//

const fs = require("fs");

fs.readFile("input.txt",'utf8',function (err,data) {
    if (err) {throw err}
    else {
        // console.log(typeof data);  //string
        // console.log(data.replace(" ", "-"));  //don't working

        fs.writeFile("write.txt", data.split(" ").join("-"), err => err?.err.message);

    }
});