function areaQuadrado(lado){
   return lado * lado;
}

console.log(areaQuadrado(2,2));

console.log('///////////////////////////////////////////');
//PARAMETROS E ARGUMENTOS

function imc(peso,altura){
    var imc = peso /altura **2;
   if(imc <= 19.0){
    return(`Abaixo do Peso: ${imc}`)
   }else if (imc >=19.1 && imc<=25.8){
    return(`Peso normal: ${imc}`)
   }else if(){
    
   }
   return imc;
}

console.log(imc(80, 1.85));


