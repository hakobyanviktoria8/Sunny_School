// 3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա ,
// հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին
// մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

const fs = require("fs/promises");

async function readInput() {
    let text = await fs.readFile("./input.txt", "utf8");

    await Promise.all([
        fs.writeFile("output1.txt", text.slice(0, text.length / 2)),
        fs.writeFile("output2.txt", text.slice(text.length / 2))
    ])

}

readInput()
    .then(() => console.log("done"))
    .catch(err => console.log(err.message));