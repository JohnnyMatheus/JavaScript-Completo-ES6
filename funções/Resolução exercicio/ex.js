// Crie uma função para verificar se um valor é Truthy

function verificaValor(nome,idade){
    return `nome: ${!!nome}  idade: ${!!idade}`;
}

console.log(verificaValor('Johnny',30))

// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado


function perimetroDoQuadrado(lado){
    return lado*4;
}
console.log(perimetroDoQuadrado(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome){
    var nome = 'Johnny';
    var sobrenome = 'Mathues';
    return `${nome} ${sobrenome}`

}

console.log(nomeCompleto())

// Crie uma função que verifica se um número é par
function verificaNumero(numero){
    if(numero % 2 ==0){
        
        return `É PAR}`;
    }else{
        return `É impar`;
    }
}
console.log(verificaNumero(2));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(x){
    return typeof x;
}

console.log(tipoDado(2))



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// // Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);
