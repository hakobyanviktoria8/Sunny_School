function wordsFromString(str) {
    //another vay  !/[^a-zA-Z0-9]/ 
    return str.split(" ").filter(x=> !/\W/.test(x)).join(" ");
}
module.exports = wordsFromString;