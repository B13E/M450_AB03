const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require('./formatting');

describe('formatting functions', () => {

  test('getLastElement returns the last element of an array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(getLastElement(array)).toBe(5);
  });

  test('isPalindrome returns true for palindromes', () => {
    const word = 'otto';
    expect(isPalindrome(word)).toBe(true);
  });

  test('isPalindrome returns false for non-palindromes', () => {
    const word = 'hello';
    expect(isPalindrome(word)).toBe(false);
  });

  test('capitalizeWords capitalizes the first letter of each word', () => {
    const sentence = 'hello';
    expect(capitalizeWords(sentence)).toBe('Hello');
  });

  test('lengthOfLongestWord returns the length of the longest word', () => {
    const sentence = 'returns the length of the longest word';
    expect(lengthOfLongestWord(sentence)).toBe(7);
  });

});