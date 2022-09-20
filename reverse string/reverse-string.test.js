import reverseString from "./reverse-string";


test("Reverse String", () => {
    expect(reverseString("book")).toEqual("koob");
});

test("Reverse String", () => {
    expect(reverseString("I Love My Books")).toEqual("skooB yM evoL I");
});

test("Reverse String", () => {
    expect(reverseString("")).toEqual("");
});

test("Reverse String", () => {
    expect(reverseString("!123 ABC!")).toEqual("!CBA 321!");
});

test("Reverse String", () => {
    expect(reverseString("   ")).toBe("   ");
});

