function areaQuadrado(lado){
   return lado * lado;
}

console.log(areaQuadrado(2,2));

console.log('///////////////////////////////////////////');
//PARAMETROS E ARGUMENTOS
console.log('CALUCULAR IMC')
function imc(peso,altura){
    var imc = peso /altura **2;
      if(imc <= 19.0){
         return(`Abaixo do Peso: ${imc}`)
      }else if (imc >=19.1 && imc<=25.8){
         return(`Peso normal: ${imc}`)
      }else if(imc >=25.9 && imc<=27.3){
         return(`Pouco Acima do Peso: ${imc}`)
      }else if(imc >=24.4 && imc<=32.3){
         return(`Acima do Peso ${imc}`)
      }else{
         return(`Obesidade ${imc.toFixed(2)}`)
      }
  
}

console.log(imc(130, 1.85));

console.log('///////////////////////////////////////////');
console.log('COR FAVORITA')

function corFavorita(){
   if
}

