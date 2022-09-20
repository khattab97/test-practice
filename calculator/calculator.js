const Calculator = (() => {
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiple = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num2 > 0 ? num1/num2 : "Can't Divide By Zero";

    return {add, subtract, multiple, divide}
})();


module.exports = Calculator;