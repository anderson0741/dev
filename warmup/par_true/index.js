function parens(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            parCount.push("(");
        } else if (str[i] === ")") {
            if (parCount.length < 0) {
                return false;
            }
            parCount.pop();
        }
    }
    return count === 0;
}

module.exports = parens;

//  console.log(parens("()()"));
