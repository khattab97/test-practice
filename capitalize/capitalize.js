const capitalize = (str) => {
    return str.replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase());
};

module.exports = capitalize;