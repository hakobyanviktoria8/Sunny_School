// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող
// txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU)
// քանակը(os.cpus()):


const fs = require("fs");
const random = require("random");
const os = require("os");

const os_cpus_length = os.cpus().length;
const name = random.int(10000000, 99999999);
fs.writeFile(`${name}.txt`, os_cpus_length.toString(), err => err?.err.message);
