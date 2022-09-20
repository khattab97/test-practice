const caesarCipher = (str, num) => {
    let cryptText = [];
    num = num > 0 ? num%26 : (num%26) + 26;
    str.split("").map(letter =>{
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
            cryptText.push(String.fromCharCode(((letter.charCodeAt(0) - 65 + num)%26) + 65));
        } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
            cryptText.push(String.fromCharCode(((letter.charCodeAt(0) - 98 + num)%26) + 98));
        } else cryptText.push(letter);
    })
    return cryptText.join("");
}
module.exports = caesarCipher;