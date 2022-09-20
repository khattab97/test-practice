import caesarCipher from "./caesar-cipher";


test("caesarCipher", () =>{
    expect(caesarCipher("hello", 3)).toEqual("khoor")
})

test("caesarCipher", () =>{
    expect(caesarCipher("hello, World", 3)).toEqual("khoor, Zruog");
});

test("caesarCipher", () =>{
    expect(caesarCipher("hello", -5)).toEqual("czggj")
})

// test with big positive nums
// test with big minus nums