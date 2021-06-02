// 5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և
// այնտեղ կտեղափոխի այն ֆայլերը իրենց պարունակություններով որոնք 1kB մեծ են :

//
// const fsExtra = require('fs-extra');
// const fs = require('fs').promises;
//
// async function moveDir() {
//     const files = await fs.readdir('./newDir');
//     await fs.mkdir('./nor');
//
//     for (let file of files) {
//         const stat = await fs.stat('./newDir/' + file);
//         if (stat.isFile() && stat.size > 10) {
//             await fs.rename('./newDir/' + file, './nor/' + file);
//         }
//     }
// }
//
// moveDir().catch(err => console.error(err));

const fs = require("fs").promises;
const fse = require('fs-extra');

async function foo() {
    const readFiles = await fs.readdir("./webAsinq");

    for (let i of readFiles) {
        const stat = await fs.stat("./webAsinq/" + i);
        if (stat.isFile() && stat.size > 3) {
            await fse.move("./webAsinq/" + i, "./newDir111/")
                .then(() => {
                    console.log('success!')
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
    // fse.copy('./web', './newDir')
    //     .then(() => console.log('success!'))
    //     .catch(err => console.error(err))
}

foo().then().catch(err => console.log(err.message));
