/**
 * @function kochSnowFlake
 * @description  es un patrón fractal que se crea mediante un proceso recursivo. 
 * @param {x1,y1,x2,y2,depth} elemento - cadena de Entrada
 * @see [kochSnowFlake](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiY6cbXzcSBAxUbJkQIHXIYCbYQFnoECBsQAQ&url=https%3A%2F%2Fwww.theinformationlab.es%2Fque-es-snowflake-y-como-funciona%2F&usg=AOvVaw28Zbpcp7lhZa_GJKhJP8wS&opi=89978449)
*/
const canvas = document.getElementById("kochCanvas");
const ctx = canvas.getContext("2d");

function drawKochSnowflake(x1, y1, x2, y2, depth) {
  if (depth === 0) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  } else {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const thirdX = x1 + deltaX / 3;
    const thirdY = y1 + deltaY / 3;
    const twoThirdsX = x1 + (2 * deltaX) / 3;
    const twoThirdsY = y1 + (2 * deltaY) / 3;
    const tipX = (x1 + x2) / 2 + (Math.sqrt(3) * (y1 - y2)) / 6;
    const tipY = (y1 + y2) / 2 + (Math.sqrt(3) * (x2 - x1)) / 6;

    drawKochSnowflake(x1, y1, thirdX, thirdY, depth - 1);
    drawKochSnowflake(thirdX, thirdY, tipX, tipY, depth - 1);
    drawKochSnowflake(tipX, tipY, twoThirdsX, twoThirdsY, depth - 1);
    drawKochSnowflake(twoThirdsX, twoThirdsY, x2, y2, depth - 1);
  }
}

// Llama a la función para dibujar el Copo de Nieve de Koch
const sideLength = 400; // Cambia esto para ajustar el tamaño del copo de nieve
const startX = canvas.width / 2 - sideLength / 2;
const startY = canvas.height / 2 + (Math.sqrt(3) * sideLength) / 6;

drawKochSnowflake(startX, startY, startX + sideLength, startY, 4);
drawKochSnowflake(
  startX + sideLength,
  startY,
  startX + sideLength / 2,
  startY - (Math.sqrt(3) * sideLength) / 2,
  4
);
drawKochSnowflake(
  startX + sideLength / 2,
  startY - (Math.sqrt(3) * sideLength) / 2,
  startX,
  startY,
  4
);
