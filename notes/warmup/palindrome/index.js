let isPalindrome = (str) => {
    str = str.replace(/[^A-z]/g, "");
    //or if you did (/[^w]/ig, "") the i means all capitals, the w is for all words
    for (let i = 0; i < str.length / 2; i++) {
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 - i].toLowerCase();
        if (first !== last) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;