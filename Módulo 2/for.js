for(var i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.art(random(WIDTH), random(HEIGHT), random(50), 0,2 *Math.PI);
  ctx.fill();
}

for (inicializador; condição-saída; expressão-final) {
  // código para executar
}