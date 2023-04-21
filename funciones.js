// _______________________________ SCRIPT DE FORMULARIO PARA SUSCRIPSION _______________________________
const formulario = document.getElementById("formulario");

// Esta constante va ser un arreglo con todos los input dentro del id formulario
const suscripcion = document.querySelector("#formulario #correo");

// Guardar una expresion regular para el correo
const expresion_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// Se utiliza para verificar si se ha ingresado el correo correctamente
let	correo = false;


const validarFormulario = (e) => {

	if (expresion_correo.test(e.target.value)) {


		document.querySelector(`#grupo__correo .formulario__input-error`).classList.remove('formulario__input-error-activo');
		correo = true;
	} 
	else {

		document.querySelector(`#grupo__correo .formulario__input-error`).classList.add('formulario__input-error-activo');
		correo = false;
	}

};

suscripcion.addEventListener('keyup', validarFormulario); //soltar tecla
suscripcion.addEventListener('blur', validarFormulario); //salir del elemento(input)



// Evento que al darle el boton enviar al formulario no lo dirija a ninguna otra pagina ni que se recargue
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(correo){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(()=>{
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

	}else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});