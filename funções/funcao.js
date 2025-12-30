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

function corFavorita(cor){
   if(cor === 'azul'){
      return('Eu gosto do céu')
   }else if(cor === 'verde'){
      return('Cor de mato')
   }else{
      return('Sem cores')
   }
}


function dizerOi(){
   console.log('OI')
}

//addEventListener('click', dizerOi);



function terceiraIdade(idade){
   if(typeof idade !== 'number'){
     return 'Por favor preecha um número';
   }
   else if(idade >= 6){
      return true;
   }else{
      return false;
   }
}


console.log(terceiraIdade(60));


////////////////////////////////////


function faltavisitar(paisesVisitados){
   var totalPaises = 193;
   return `Faltam visitar ${totalPaises - paisesVisitados}`

}

console.log(faltavisitar(10));