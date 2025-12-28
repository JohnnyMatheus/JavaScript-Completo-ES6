// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log('1-Resultado: ',total)

// Crie duas expressões que retornem NaN
var idade = 30;
var anos = "anos de idade";
expressao = idade / anos
console.log(expressao)

expressao2 = 'ciencia' - 'computação';
console.log(expressao2)

// Somar a string '200' com o número 50 e retornar 250
var n1 = '200';
var n2 = 50;
var somar = +n1 + 50
console.log(`A soma entre '${n1}' + ${n2} = ${somar}`);
console.log(typeof somar)
// Incremente o número 5 e retorne o seu valor incrementado
var number = 5;
console.log(++number)

// Como dividir o peso por 2?
var numero = '80';
+numero;
console.log(numero)
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
peso =numero;
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log('Divisão',pesoPorDois)
