import analyzeArray from "./analyze-array";


test("Analyze Array", () => {
    expect(analyzeArray([1,2,3,8,5,6])).toMatchObject({average: 25/6, min: 1, max: 8, length: 6});
});


test("Analyze Array", () => {
    expect(analyzeArray([-1,2,3,8,5,6])).toMatchObject({average: 23/6, min: -1, max: 8, length: 6});
});

test("Analyze Array", () => {
    expect(analyzeArray([1,2,3,8,5,6])).toMatchObject({average: 25/6, min: 1, max: 8, length: 6});
});


test("Empty Array", () => {
    expect(() => analyzeArray([])).toThrow();
});

test("One Val.", () => {
    expect(analyzeArray([2])).toMatchObject({average: 2, min: 2, max: 2, length: 1})
});
