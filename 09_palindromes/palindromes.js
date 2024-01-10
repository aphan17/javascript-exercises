const palindromes = function (str) {
    let noPunc = str.replace(/\W/g, '').toLowerCase();
    let split = noPunc.split("");
    let reversed = split.reverse("");
    if (reversed.join("") === noPunc) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
