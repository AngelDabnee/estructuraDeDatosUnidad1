function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const digitToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = digitToLetters[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, current + letters[i]);
    }
  }

  const result = [];
  backtrack(0, '');

  return result;
}
export {letterCombinations}
//Segunda opcion
/*function letterCombinations(digits) {
    if (digits.length === 0) {
      return [];
    }
  
    const digitMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    function generateCombinations(index, currentCombination, result) {
      if (index === digits.length) {
        result.push(currentCombination);
        return;
      }
  
      const currentDigit = digits[index];
      const letters = digitMap[currentDigit];
  
      for (const letter of letters) {
        generateCombinations(index + 1, currentCombination + letter, result);
      }
    }
  
    const result = [];
    generateCombinations(0, '', result);
    return result;
  }
  
  export { letterCombinations }*/