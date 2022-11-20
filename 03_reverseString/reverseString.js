const reverseString = function(string) {
    let reverse = string.split("")
    reverse = reverse.reverse()
    let finalString = reverse.join("")
    return finalString
};

// Do not edit below this line
module.exports = reverseString;
