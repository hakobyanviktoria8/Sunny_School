// console.log("lesson 19");
process.on('exit', ()=>{
    console.log("Exit work");
})

// console.log(process.env) 

process.nextTick(()=>{
    console.log("next tick") 
})

console.log("first")

setImmediate(()=>{
    console.log("set Immediate")
})