var myData = ['SP', 'RJ', 'MG', 'BA', 'MS'];
var myArray = myData.split(','); //pega um parametro solitário e sapara da string
console.log(myArray[myArray.length - 1]); //O ultimo item do array
var myNew = myArray.join(',');
console.log(myNew); //buscando no sentido oposto

var nomeDogs = ['auau', 'bidu', 'fash', 'bella'];
console.log(nomeDogs.toString())