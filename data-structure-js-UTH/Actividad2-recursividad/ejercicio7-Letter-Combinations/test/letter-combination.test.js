import { letterCombinations } from "../letter-combination"


describe('Suite de pruebas para la función letterCombinations()', () => {
  it('Debe devolver las combinaciones de letras para el número 23', () => {
    const combinations = letterCombinations("23");
    const expectedCombinations = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(combinations).toEqual(expectedCombinations);
  });

  it('Debe devolver las combinaciones de letras para el número 79', () => {
    const combinations = letterCombinations("79");
    const expectedCombinations = ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"];
    expect(combinations).toEqual(expectedCombinations);
  });

  it('Debe devolver un array vacío para una cadena vacía', () => {
    const combinations = letterCombinations("");
    expect(combinations).toEqual([]);
  });
});
