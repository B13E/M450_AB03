function uniqueValues(array) {
  return [...new Set(array)];
}

function letterFrequency(word) {
  const frequency = {};

  for (const letter of word) {
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

function sortByKey(array, key) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

function deepClone(Objekt) {
  return JSON.parse(JSON.stringify(Objekt));
}

function intersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}

function divide(a, b) {
  if (typeof b !== 'number' || b === 0) {
      throw new Error('Der Teiler b muss eine Zahl sein und darf nicht 0 sein.');
  }
  return a / b;
}


module.exports = { uniqueValues, letterFrequency, sortByKey, deepClone, intersection, divide };