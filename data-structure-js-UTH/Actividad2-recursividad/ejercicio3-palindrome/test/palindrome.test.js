import { esPalindromo } from "../palindrome"
describe('Suite de pruebas para la función de palindrome()',() => {
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('Test 1 - Debe devolver true para "A man a plan a canal Panama"', () => {
        expect(esPalindromo('A man a plan a canal Panama')).toBe(true);
      });
      it('Test 2 - Debe devolver true para "12321"', () => {
        expect(esPalindromo('12321')).toBe(true);
      });
      it('Test 3 - Debe devolver true para "anita lava la tina"', () => {
        expect(esPalindromo('anita lava la tina')).toBe(true);
      });
});