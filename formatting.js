function getLastElement(array) {
    return array[array.length - 1];
}

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function lengthOfLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

module.exports = { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord };