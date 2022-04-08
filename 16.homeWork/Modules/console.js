// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
//   })
// const args = process.argv.slice(2)
// console.log(args[0])

// console.log('%o')

// console.log('My %s has %d ears', 'cat', 2)

// // console.clear()

// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// console.countReset('orange')

// oranges.forEach(fruit => {
//   console.count(fruit)
// })

// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()


console.log('\x1b[33m%s\x1b[0m', 'hi!')

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 50 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)