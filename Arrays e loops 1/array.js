var videoGames = ['Nintendo Switch', 'Play Station', 'XBOX'];

console.log(videoGames[0]);
console.log(videoGames[1]);
console.log(videoGames[2]);

//remover ultimo item
videoGames.pop();

console.log(videoGames)

//adiconar um item ao final do array
videoGames.push('PS5');
console.log(videoGames)

console.log('/////////////////////////////////////////////////');
console.log('')
console.log('LOOPS FOR')
for(let i= 0;i<videoGames.length;i++){
    console.log(videoGames[i],i);
}

console.log('/////////////////////////////////////////////////');
videoGames.forEach(function(item) {
    console.log(item)
})

console.log('/////////////////////////////////////////////////');
for(var numero = 0;numero<10;numero++){
    console.log(`${numero}`);
}

console.log('/////////////////////////////////////////////////');
console.log('')
console.log('LOOPS while')
//LOOP WHILE

var n =0;

while(n<10){
    console.log(n);
    n++;
}


var frutas = ['Banana','Maçã','Uva','Pessego','Melancia']
for(var x=0;x<frutas.length;x++){
    console.log(frutas[x]);
    if(frutas[x] === 'Uva'){
        break;
    }
}

console.log('/////////////////////////////////////////////////');
console.log('')
var consoles = ['PS4','XBOX','NINTENDO','PS1']


consoles.forEach(function(gamer, index, array){
    console.log(gamer,index,array);
})