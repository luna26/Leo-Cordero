//dentro de una funcion autojecutable sirve para encapsular el codigo
(function(){
    setTimeout(function(){  
        document.querySelector('.contenedor-1').innerHTML = "<button class='btn-click-3'>click 3!!!</button>";
    }, 2000);
    //todo tiempo en js es en ms
})();

//evento para el boton
document.querySelector('#btn-click-me').addEventListener('click', function(){
    //console.log('CLICK-BTN');
});

//evento para el contenedor
// document.querySelector('.parrafo').addEventListener('click', function(){
//     console.log('CLICK-parrafo');
// });

//evento para el contenedor usando DELEGATE
document.getElementsByTagName('body')[0].addEventListener('click', function(event){
    let target = event.target;

    if (target.matches('#btn-click-me')) {
        // Run your code to open a modal
        console.log('CLICK!!!!');
        event.stopPropagation();
	}else if(target.matches('#btn-click-me-2')){
        console.log('CLICK 2!!');
    }else if(target.matches('.btn-click-3')){
        console.log('CLICK 3!!');
    }
});

//vamos a escuchar el evento del form
document.getElementsByTagName('body')[0].addEventListener('submit', function(event){
    //detiene la funcion nativa del elemento button
    event.preventDefault();
    console.log('El form esta fue submiteado');
    var form = document.querySelector('.form-login');
    var formData = serialize(form);
    console.log('formData', formData+'&cuenta1=3000$');
});

//validaciones
document.querySelector('#input-nombre').addEventListener('blur', function(event){
    validation(event.target.value.length > 3 ? true : false);
});

function validation(validate){
    validate ? document.querySelector('.btn-submit-form').removeAttribute('disabled') : document.querySelector('#input-nombre').classList.add('error');
}


var serialize = function (form) {

	// Setup our serialized data
	var serialized = [];

	// Loop through each field in the form
	for (var i = 0; i < form.elements.length; i++) {

		var field = form.elements[i];

		// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

		// If a multi-select, get all selections
		if (field.type === 'select-multiple') {
			for (var n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
			}
		}

		// Convert field data to a query string
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
		}
	}

	return serialized.join('&');

};

document.querySelector('#input-nombre').addEventListener('keypress', function(event){
    console.log(event.target.value);
});


class EventClass {
    constructor() {
      this.functionMap = {};
    }
  
    addEventListener(event, func) {
      this.functionMap[event] = func;
      document.addEventListener(event.split('.')[0], this.functionMap[event]);
    }
  
    removeEventListener(event) {
      document.removeEventListener(event.split('.')[0], this.functionMap[event]);
      delete this.functionMap[event];
    }
  }


  var events = {
    on(event, cb, opts){
      if( !this.namespaces ) // save the namespaces on the DOM element itself
        this.namespaces = {};
  
      this.namespaces[event] = cb;
      var options = opts || false;
      
      this.addEventListener(event.split('.')[0], cb, options);
      return this;
    },
    off(event) {
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    }
  }
  
  // Extend the DOM with these above custom methods
  window.on = Element.prototype.on = events.on;
  window.off = Element.prototype.off = events.off;


  window
  .on('click.adios', ()=> console.log("adios"))
  .on('click.hola', ()=> console.log("hola"))


setTimeout(function(){
    console.log('removiendo evento click.adios');
    window.off('click.adios');
}, 4000);