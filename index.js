// Definindo cor inicial
const [red, green, blue] = [55, 1, 1]

// Pegando o indicator pelo ID
const progress = document.querySelector('.progress');

// Pegando a altura maxima do que podemos rolar 
const maxHeight = document.body.scrollHeight - window.innerHeight;

// Adicionando o ouvinte de evento de rolagem, calcularemos
// a largura em porcentagem do indicador com base na altuda de
// rolagem e na posição atual
const htmlElement = document.documentElement;
const bodyElement = document.body;
const st = 'scrollTop';
const sh = 'scrollHeight';
let scroll;

document.addEventListener('scroll', function () {

    //Progresso do scroll em porcentagem
    scroll = (htmlElement[st] || bodyElement[st]) / ((htmlElement[sh] || bodyElement[sh]) - htmlElement.clientHeight) * 100;

    //Seta a propriedade scroll declarada no css
    progress.style.setProperty('--scroll', scroll + '%');
});



