// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

//RESPOSTA:
var Brasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
//RESPOSTA:
Brasil.forEach(function(){
    console.log(`O brasil ganhou a copa de ${Brasil}`)
});
//RESPOSTA:
for(var i =0;i<Brasil.length;i++){
    console.log(`O brasil ganhou a copa de ${Brasil[i]}`);
}

//RESPOSTA:
console.log("////////////////////////////////////////////")
var ganhar = 0;
while(ganhar < Brasil.length){
    console.log(`O brasil ganhou a copa de ${Brasil[ganhar]}`);
    ganhar++;
}


console.log("////////////////////////////////////////////")
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var f = 0;f < frutas.length;f++){
    console.log(frutas[f]);
    if(frutas[f] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[4];
//ou 

var ultimaFruta = frutas[frutas.length-1];