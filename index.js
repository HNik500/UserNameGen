function NameGen(name) {
    let arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let arrayNo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let gogo = "";
    gogo+=arrayLetters[Math.floor(Math.random()*arrayLetters.length)]
    gogo+=arrayLetters[Math.floor(Math.random()*arrayLetters.length)]
    gogo+=arrayNo[Math.floor(Math.random()*arrayNo.length)]

    return name + gogo
}
// console.log(NameGen("John"));
module.exports = NameGen
