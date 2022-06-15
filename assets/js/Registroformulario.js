const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{6,12}$/, // Letras, numeros, guion y guion_bajo

	nombre: /^[a-zA-ZÀ-ÿ\s]{3,12}$/, // Letras y espacios, pueden llevar acentos.

	apellidopat: /^[a-zA-ZÀ-ÿ\s]{6,20}$/,

	apellidomat: /^[a-zA-ZÀ-ÿ\s]{6,20}$/,

	password: /^.{8,12}$/, // 8 a 12 digitos.

	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//telefono: /^\d{7,14}$/ // 7 a 14 numeros.

	phone: /^[+]+\d{10,12}$/, //7 a 14 numeros.

	//phone: ^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
}

const campos = {
	usuario: false,
	nombre: false,
	apellidopat: false,
	apellidomat: false,
	password: false,
	correo: false,
	phone: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "apellidopat":
			validarCampo(expresiones.apellidopat, e.target, 'apellidopat');
			break;
		case "apellidomat":
			validarCampo(expresiones.apellidomat, e.target, 'apellidomat');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			validarCorreo2();
			break;
		case "correo2":
			validarCorreo2();
			break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');

		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		//document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		//document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		//formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}


const validarCorreo2 = () => {
	const inputCorreo = document.getElementById('correo');
	const inputCorreo2 = document.getElementById('correo2');

	if (inputCorreo.value !== inputCorreo2.value) {
		document.getElementById(`grupo__correo2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__correo2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__correo2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__correo2 i`).classList.remove('fa-check-circle');
		campos['correo'] = false;
	} else {
		document.getElementById(`grupo__correo2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__correo2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__correo2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__correo2 i`).classList.add('fa-check-circle');
		campos['correo'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.nombre && campos.apellidopat && campos.apellidomat && campos.phone && campos.email && campos.usuario && campos.password && terminos.checked) { //
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} //else {
	// 	document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	// }
});

var miForm = document.getElementById("formulario");
miForm.onsubmit = function (e) {
	e.preventDefault();
	var formData = new FormData(this);
	var jsonData = {};
	for (var [k, v] of formData) {
		jsonData[k] = v;
	}
	console.log(jsonData);
}
miForm: JSON.stringify;





// function confirmar(){

// 	alertify
// 	.alert("Registro Exitoso", function(){
// 	  alertify.success('Aceptar');
// 	});
// 	}
// 	document.addEventListener("DOMContentLoaded", function(e) {

// 		var miForm = document.getElementById("formulario");
// 		miForm.onsubmit = function(e) {
// 		  e.preventDefault();
// 		  var formData = new FormData(this);
// 		  var jsonData = {};
// 		  for (var [k, v] of formData) {
// 			jsonData[k] = v;
// 		  }
// 		  console.log(jsonData);
// 		}
// 		miForm:JSON.stringify
// 	  });


//     function confirmar(){

//     alertify
//    .alert("Registro Exitoso", function(){
//       alertify.success('Aceptar');
//     });
//     }

