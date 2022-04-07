function hw5(word){
    let idx =0
    const interval = setInterval(()=>{
        if(idx === word.length-1){
            clearInterval(interval)
        }
        console.log(word[idx])  
        idx++          
    },1000)
}
module.exports = hw5