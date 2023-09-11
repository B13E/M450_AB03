const { test } = require("ramda");
module.exports = { getLastElement, isPalindrom, capitalizeWords, lengthOfLongestWord  } = require("./formatting");



test("is a Palindrom", () => {
    const result = "Wort";
    const expected = "Wort";
    expected(result).toEqual(expected);
});

/*
test("sum add two numbers", () => {
    const result = sum(20, 30);
    const expected = 50;
    expect(result).toBe(expected);
});
*/