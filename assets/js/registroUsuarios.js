
/*
const formSignin = document.querySelector("#formulario");

console.log(formSignin);

formSignin.addEventListener("submit", function (e) { //este evento se ejecuta cuando se hace click en el boton.

    e.preventDefault();
    console.log(1);

    const nombre = document.querySelector("#nombreAlumno").value;
    const apellidoPat = document.querySelector("#apellidopat").value;
    const apellidoMat = document.querySelector("#apellidomat").value;
    const telefono = parseInt(document.querySelector("#phone").value);
    const correo = document.querySelector("#correo").value;
    const correo2 = document.querySelector("#correo2").value;
    const usuario = parseInt(document.querySelector("#usuario").value);
    const password = document.querySelector("#password").value;
    const password2 = document.querySelector("#password2").value;
    const terminos = document.querySelector("#terminos").value;
    console.log(usuario.value); // mostramos el valor del campo username en la consola
    console.log(password.value); // mostramos el valor del campo password en la consola

    const data =

    {
        nombre: nombre.value,
        apellidoPat: apellidoPat.value,
        apellidoMat: apellidoMat.value,
        telefono: telefono.value,
        correo: correo.value,
        correo2: correo2.value,
        usuario: usuario.value,
        password: password.value,
        password2: password2.value,
        terminos: terminos.value
    };

    //METODO POST
    fetch("http://localhost:8080/api/registro/", { //hace una peticion post al servidor para que lo valide
        method: 'POST', // or 'PUT' // indicamos el metodo de la peticion
        headers: { // indicamos los encabezados de la peticion
            'Content-Type': 'application/json', // indicamos que el contenido es json
        },
        body: JSON.stringify(data), // indicamos el contenido de la peticion debe ser un objeto json
    })
        .then(response => response.text()) // recibimos la respuesta del servidor en formato texto porque es una cadena de texto
        .then(data => { //si la respuesta es correcta mostramos el mensaje de bienvenida
            console.log('Success:', data);//Modal, una alerta, un swift alert, ventanas emergentes, etc. 
        })
        .catch((error) => { // si la respuesta es incorrecta mostramos el mensaje de error
            console.error('Error:', error);
        });
});

*/

//---------------------------------------------------------------------------------------------------------------------

const createProduct = (nombre,apellidoPat,apellidoMat,telefono,correo,correo2,usuario,password,password2,terminos) => {
    const url =
      "https://ecommerceplayeras-default-rtdb.firebaseio.com/registro.json";
  
    const product = {
        nombre: nombre,
        apellidoPat: apellidoPat,
        apellidoMat: apellidoMat,
        telefono: telefono,
        correo: correo,
        correo2: correo2,
        usuario: usuario,
        password: password,
        password2: password2,
        terminos: terminos
    };
  
    let productId = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        productId = product.nombre;
        window.location.href = `/NewRegistro.html?registroId=${productId}`;
      });
  };

  const getData = () => {
    const nombreE = document.querySelector("#nombre").value;
    const apellidoPatE = document.querySelector("#apellidopat").value;
    const apellidoMatE = document.querySelector("#apellidomat").value;
    const telefonoE = parseInt(document.querySelector("#phone").value);
    const correoE = document.querySelector("#correo").value;
    const correo2E = document.querySelector("#correo2").value;
    const usuarioE = parseInt(document.querySelector("#usuario").value);
    const passwordE = document.querySelector("#password").value;
    const password2E = document.querySelector("#password2").value;
    const terminosE = document.querySelector("#terminos").value;
  
    
    createProduct(nombreE,apellidoPatE,apellidoMatE,telefonoE,correoE,correo2E,usuarioE,passwordE,password2E,terminosE);
  };
  
  const submitBtn = document.getElementById("register-btn");
  
  submitBtn.addEventListener("click", getData);
  