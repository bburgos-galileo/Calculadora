var MouseTrap = require('mousetrap');

var botonUno = document.getElementById('boton1');
var botonDos = document.getElementById('boton2');
var botonTres = document.getElementById('boton3');
var botonCuatro = document.getElementById('boton4');
var botonCinco = document.getElementById('boton5');
var botonSeis = document.getElementById('boton6');
var botonSiete = document.getElementById('boton7');
var botonOcho = document.getElementById('boton8');
var botonNueve = document.getElementById('boton9');
var botonCero = document.getElementById('boton0');
var actual =  document.getElementById('numeroActual');
var resultado =  document.getElementById('resultado');
var botonSuma = document.getElementById("botonSuma");
var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonMulti = document.getElementById("botonMulti");
var botonDiv = document.getElementById("botonDivision");

botonUno.addEventListener('click', clickUno);
botonDos.addEventListener('click', clickDos);
botonTres.addEventListener('click', clickTres);
botonCuatro.addEventListener('click', clickCuatro);
botonCinco.addEventListener('click', clickCinco);
botonSeis.addEventListener('click', clickSeis);
botonSiete.addEventListener('click', clickSiete);
botonOcho.addEventListener('click', clickOcho);
botonNueve.addEventListener('click', clickNueve);
botonCero.addEventListener('click', clickCero);

botonSuma.addEventListener('click', clickSuma);
botonResta.addEventListener('click', clickResta);
botonMulti.addEventListener('click', clickMulti);
botonDiv.addEventListener('click', clickDiv);

MouseTrap.bind('1', clickUno);
MouseTrap.bind('2', clickDos);
MouseTrap.bind('3', clickTres);
MouseTrap.bind('4', clickCuatro);
MouseTrap.bind('5', clickCinco);
MouseTrap.bind('6', clickSeis);
MouseTrap.bind('7', clickSiete);
MouseTrap.bind('8', clickOcho);
MouseTrap.bind('9', clickNueve);
MouseTrap.bind('0', clickCero);

MouseTrap.bind('+', clickSuma);
MouseTrap.bind('-', clickResta);
MouseTrap.bind('*', clickMulti);
MouseTrap.bind('/', clickDiv);

function clickUno(){
    actual.innerHTML += '1';
}

function clickDos(){
    actual.innerHTML += '2';
}

function clickTres(){
    actual.innerHTML += '3';
}

function clickCuatro(){
    actual.innerHTML += '4';
}

function clickCinco(){
    actual.innerHTML += '5';
}

function clickSeis(){
    actual.innerHTML += '6';
}

function clickSiete(){
    actual.innerHTML += '7';
}

function clickOcho(){
    actual.innerHTML += '8';
}

function clickNueve(){
    actual.innerHTML += '9';
}

function clickCero(){
    actual.innerHTML += '0';
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorActual + valorResultado;
    actual.innerHTML = '0';
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorActual + valorResultado;
    actual.innerHTML = '0';
}

function clickResta(){
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML =  valorResultado - valorActual;
    actual.innerHTML = '0';
}

function clickMulti(){
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorActual * valorResultado;
    actual.innerHTML = '0';
}

function clickDiv(){
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorResultado / valorActual;
    actual.innerHTML = '0';
}