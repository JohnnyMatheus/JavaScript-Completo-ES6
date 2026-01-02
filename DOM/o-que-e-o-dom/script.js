
const href = window.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/DOM/o-que-e-o-dom/index.html'){
    console.log('É igual')
}

const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);


h1Selecionado.addEventListener('click', function(){
    console.log('clicou em', h1Selecionado);
})