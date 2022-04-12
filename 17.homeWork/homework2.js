// 2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի 
//IPv4 IP հասցեն(os.networkInterfaces()):
//

const os = require("os");

// console.log(os.networkInterfaces());
os.networkInterfaces()['Wi-Fi']?.map(x => x.family === "IPv4" && console.log(x.address));