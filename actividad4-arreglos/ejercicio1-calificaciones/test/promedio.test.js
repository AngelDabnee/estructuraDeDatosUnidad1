import { calcularPromedioAprobadosYreprobados } from "../promedio"
describe('Suite de pruebas para la función de Promedio, totales reprobados, totales aprobados()',() =>{
    beforeAll(() =>{
        console.info('Autor: Hecho por Angel Dabnee');
    })
    it('debería calcular el promedio y contar aprobados y reprobados correctamente, 67 promedio, 3 aprobados 2 reprobados', () => {
        const calificaciones = [80, 70, 55, 90, 40];
        const resultado = JSON.parse(calcularPromedioAprobadosYreprobados(calificaciones));
    
        expect(resultado).toHaveProperty('promedio');
        expect(resultado).toHaveProperty('aprobados');
        expect(resultado).toHaveProperty('reprobados');
    
        expect(resultado.promedio).toBe(67);
        expect(resultado.aprobados).toBe(3);
        expect(resultado.reprobados).toBe(2);
        
      });
});