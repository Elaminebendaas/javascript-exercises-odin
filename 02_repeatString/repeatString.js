const repeatString = function(string, count) {
    if(count >= 0){
        newString = string.repeat(count)
        return newString
    }else{
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = repeatString;
