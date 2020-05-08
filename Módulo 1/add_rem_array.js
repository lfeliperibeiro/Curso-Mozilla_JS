var myArray = ['SP','MG','RJ','ES'];
myArray.push('BA');//inserir um item no final so array
var novoComprimento = myArray.push('AM');//adiciona um novo comprimento ao array
myArray.pop();// remove o ultimo item do array
var itemRemovido = myArray.pop();// chama o ultimo item removido
myArray.unshift('PB');//adiciona um item no inicio do array
myArray.shift();//remove o primeiro item do array

console.log(myArray)