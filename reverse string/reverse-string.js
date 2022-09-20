const reverseString = (str) => {
    let strList = str.split("");
    console.log(strList)
    for (let i=0; i < str.length/2; i++){
        [strList[i], strList[str.length-1-i]] = [strList[str.length-1-i], strList[i]];
    }
    console.log(strList)
    console.log(strList.join(""));
    return strList.join("");
};

module.exports = reverseString;