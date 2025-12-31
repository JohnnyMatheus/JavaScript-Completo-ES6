var menu = {
    width: 800,
    height:50,
    backgroundColor:'#84f',
    metadeHeight(){
        return this.height /2;
    }
}
//mudando o valor 
menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function() {
    console.log('escondi');
}
var bg = menu.backgroundColor;