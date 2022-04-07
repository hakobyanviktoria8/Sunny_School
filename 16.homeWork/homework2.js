const rd = require("random");

function hw2() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(rd.int(0, 100))
    }
    return arr
}

console.log(hw2())
module.exports = hw2;


// const random = require("random");

// function randomFunc() {
//     for (let i = 0; i < 5; i++) {
//         console.log(random.int(0, 100))
//     }
// }
//
// module.exports = randomFunc;