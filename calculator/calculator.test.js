import Calculator from "./calculator";


test("add", () =>{
    expect(Calculator.add(5, 6)).toBe(11);
});

test("add", () =>{
    expect(Calculator.add(0, 6)).toBe(6);
});

test("add", () =>{
    expect(Calculator.add(-5, 6)).toBe(1);
});

test("add", () =>{
    expect(Calculator.add(0, 0)).toBe(0);
});


test("subtract", () =>{
    expect(Calculator.subtract(5, 6)).toBe(-1);
});

test("subtract", () =>{
    expect(Calculator.subtract(0, 0)).toBe(0);
});

test("subtract", () =>{
    expect(Calculator.subtract(10, 6)).toBe(4);
});


test("multiply", () =>{
    expect(Calculator.multiple(5, 6)).toBe(30);
});

test("multiply", () =>{
    expect(Calculator.multiple(0, 6)).toBe(0);
});


test("multiply", () =>{
    expect(Calculator.multiple(5, 6)).toBe(30);
});



test("divide", () =>{
    expect(Calculator.divide(10, 2)).toBe(5);
});


test("divide", () =>{
    expect(Calculator.divide(5, 0)).toEqual("Can't Divide By Zero");
});

test("divide", () =>{
    expect(Calculator.divide(0, 5)).toEqual(0);
});