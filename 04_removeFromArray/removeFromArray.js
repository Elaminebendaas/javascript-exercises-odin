const removeFromArray = function(content, removing) {
    let length = content.length
    console.log(removing)
    for(i = 0; i<length;i++){
        if(content[i] == removing){
            content.splice(i, 1)
            console.log(i)
        }
    }
    return content
};

// Do not edit below this line
module.exports = removeFromArray;
