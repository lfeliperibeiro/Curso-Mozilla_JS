var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
var produto = ['Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'
];

for (var i = 0; i < produto.length; i++) {
  var sub = produto[i].split(':');
  var nome = sub[0];
  var preco = Number(sub[1]);
  total += preco;




  itemText = nome + ' - R$ ' + preco;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: R$ ' + total.toFixed(2);