function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let time;

function inicaRelogio(){
    time = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(time)
    inicaRelogio();
})
pausar.addEventListener('click', function(event){
    clearInterval(time);
    relogio.classList.add('pausado')
    
})
zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(time)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})
