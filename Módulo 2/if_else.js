var select = document.querySelector('select');
var texto = document.querySelector('p');

select.addEventListener('change', useTempo);

function useTempo() {
  var escolha = select.value;

  if (escolha == 'sol') {
    texto.textContent = 'Está um dia lindo de sol aproveite!';
    document.bgColor = 'yellow';
  } else if (escolha == 'chuva') {
    texto.textContent = 'Esta um dia chuvoso! Use guarda-chuva.';
    document.bgColor = 'gray'
  } else if (escolha == 'frio') {
    texto.textContent = 'Está um dia frio! use agasalho!';
    document.bgColor = '#6495ED';
  } else {
    texto.textContent = '';
  }
}