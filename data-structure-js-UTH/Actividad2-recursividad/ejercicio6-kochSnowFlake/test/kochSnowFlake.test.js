import { kochSnowflake } from "../kochSnowFlake"
describe('Suite de pruebas para la función de el copo de nieve()',() => {
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('should generate Koch Snowflake points correctly', () => {
        const x1 = 100;
        const y1 = 400;
        const x2 = 400;
        const y2 = 400;
        const depth = 4;
    
        const expectedPoints = [
          [100, 400],
          [175, 400],
          [237.5, 282.142135623731],
          [300, 400],
          [400, 400],
        ];
    
        expect(kochSnowflake(x1, y1, x2, y2, depth)).toEqual(expectedPoints);
      });
});