var pessoa ={
    nome: 'Johnny',
    idade: 30

}

console.log(pessoa.nome);

//Metodos

var quadrado = {
    lados:4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    },
};


console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


//Outro metodo de fazer 
var quadrado2 = {
    lados:4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },
};


console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


console.log(Math.PI);

