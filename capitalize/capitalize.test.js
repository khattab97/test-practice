import capitalize from "./capitalize";

test("Firsr Letter cap", () => {
    expect(capitalize("A756mms")).toBe("A756mms");
});

test("Firsr Letter cap", () => {
    expect(capitalize("here To STAY")).toBe("Here To STAY");
});

test("Firsr Letter cap", () => {
    expect(capitalize("..58HMAD")).toBe("..58HMAD");
});

test("Firsr Letter cap", () => {
    expect(capitalize("lOOOOL")).toBe("LOOOOL");
});

test("Firsr Letter cap", () => {
    expect(capitalize("__HIIII")).toBe("__HIIII");
});

test("Firsr Letter cap", () => {
    expect(capitalize("")).toBe("");
});

test("Firsr Letter cap", () => {
    expect(capitalize("   ")).toBe("   ");
});