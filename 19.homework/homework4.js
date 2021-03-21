// 4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի
// հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․

const fs = require("fs").promises;

async function returnPromise(path) {
    let data =  (await fs.readFile(path)).toString().split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
    console.log(data);
    await fs.writeFile(path, data)
}

returnPromise("./input4.txt")
    .then(() => console.log("done"))
    .catch(err => console.log(err.message));


console.log("done");
