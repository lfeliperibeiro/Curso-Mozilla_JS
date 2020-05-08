let select = document.querySelector('select');
let texto = document.querySelector('p');

select.addEventListener('change', paraTempo);

function paraTempo(){
  let escolha = select.value;

  switch(escolha){
    case 'sol':
      texto.textContent = 'esta um lindo dia de Sol! Aproveite!';
      document.bgColor = 'yellow';
      break;
      case 'chuva':
        texto.textContent = 'esta um dia chuvoso. Use o guarda-chuva';
        document.bgColor = 'gray';
        break;
      case 'frio':
        texto.textContent = 'Esta frio. Coloque um agasalho.';
        document.bgColor = 'blue';
        break;
      case 'calor':
        texto.textContent = 'Esta calor. Beba bastante liquido.';
        document.bgColor = 'orange'
      break;
      default:
        texto.textContent = ''
  }
}

