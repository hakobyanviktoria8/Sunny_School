const repl = require('repl');
const local = repl.start();


// work how to: node + enter
//2+2 //4

const name= "Viki"

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
  })
const args = process.argv.slice(2)
console.log(args[0])
