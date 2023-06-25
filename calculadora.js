"use strict"
//Definimos variables a utilizar
let primerNumero , segundoNumero , tipoOperacion , resultado;

//Definimos una fución para limpiar la pantalla
function fnLimpiarPantalla(){
    display.value = (" ");
}
//definimos una funcion para marcar los números en la pantalla desde los botones
function fnMarcarNumero(n){
    if(!(display.value.includes("."))){
        display.value = display.value + n;
    }else if(n != "."){
        display.value = display.value + n;
    }
}
//Definimos una función para recibir la operación
function fnOperacion(op){
    primerNumero = Number(display.value);
    fnLimpiarPantalla();
    tipoOperacion = Number(op);
}
//Definimos la función para el botón de igual
function fnOperar(){
    segundoNumero = Number(display.value);
    fnLimpiarPantalla();
    switch(tipoOperacion){
        case 1:
            resultado = primerNumero + segundoNumero;
        break;
        case 2:
            resultado = primerNumero - segundoNumero;
        break;
        case 3:
            resultado = primerNumero * segundoNumero;
        break;
        case 4:
            resultado = primerNumero / segundoNumero;
        break;
        case 5:
            resultado = Math.pow(primerNumero , segundoNumero);
        break;
    }
    display.value = resultado;
        
}
//Definimos una funcion para el botón porcentaje
function fnPorcentaje(){
    segundoNumero = Number(display.value);
    fnLimpiarPantalla();
    resultado = primerNumero * (segundoNumero / 100);
    display.value = resultado;
}
//Definimos una función para cambio de signo
function fnCambiarSigno(){
    display.value = Number(display.value) * -1;
}