const Solution = require('../snow');

describe('Solution', () => {
  describe('colectarNieveCuadratica', () => {
    it('should calculate snow collection correctly (cuadratic)', () => {
      const solution = new Solution();
      const list = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];
      const result = solution.colectarNieveCuadratica(list);
      const expectedResult = 12;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('colectarNieveLineal', () => {
    it('should calculate snow collection correctly (linear)', () => {
    });
  });

  describe('colectarNieveBest', () => {
    it('should calculate snow collection correctly (best)', () => {
    });
  });
});