// Declaracion normal de una funcion
function suma(a, b){
	console.log('suma', a+b);
}


suma(1 , 4);

//IIFE Son funciones que se llaman asi mismas, genera un nuevo scope o context, se utiliza para hacer wrapper al codigo
(function(){
    console.log('Soy una funcion que se ejecuta asi misma :D');

    let nombre = 'Leo Cordero';
    console.log(this);
})();


//un objeto en js, con una funcion como value
let persona = {
    key:'value',
    name: 'Leo Cordero',
    returnName: function(){
        console.log('nuevoThis', this);
    },
    edad: 10
};

persona.returnName();

//function anonima
setTimeout(function(){
    console.log('Me ejecuto despues de 2 segundos')
}, 2000);

//function callback
function cargandoDesdeInternet(time, callback){
    setTimeout(function(){
        console.log('Me ejecuto despues de 2 segundos')
    }, time);

    callback();
}

cargandoDesdeInternet(3000, function(){
    console.log('Ya se cargo');
});

//declarando funciones dentro de variables
let variableFuncion = function(){
    console.log('soy una funcion en una variable');
}

variableFuncion();

//ejemplo de click en forma native (js vanilla)

document.getElementById('btn-click-me').addEventListener("click", function(){
    console.log('me dieron Click');
});