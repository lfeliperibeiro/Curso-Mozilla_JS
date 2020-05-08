var select = document.querySelector('select');
var html = document.querySelector('html');


select.onchange = function () {
  select.value === 'black' ? novaData('black', 'white') : novaData('white', 'black');

}

function novaData(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

