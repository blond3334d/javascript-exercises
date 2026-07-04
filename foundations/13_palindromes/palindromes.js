const palindromes = function (str) {
    /*  [\s\W] -> finds any whitespace/newlines (\s) and punctuations and special symbols (\W)
        (/g) -> the global flag, it removes all occurrences throughout the entire string.
        the "" argument means replace it with non-space. */
    const cleanStr = str.replace(/[\s\W]/g, "").toLowerCase();

    let rev = ""; // initialize an empty 'reverse' string

    for (let i = cleanStr.length - 1; i >= 0; i--) {
        rev += cleanStr[i];
    }

    if (rev == cleanStr) {
        return true
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
