function charOneSecondOutput(word) {
    for (let i = 0; i < word.length; i++) {
        if (word.length) {
            setTimeout(function () {
                console.log(word[i]);
            }, i * 1000)
        }
    }

}

module.exports = charOneSecondOutput;