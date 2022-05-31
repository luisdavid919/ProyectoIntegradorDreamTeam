function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.apellido = document.getElementById("apellido").value;
    localStorage.telefono = document.getElementById("telefono").value;
    localStorage.correo = document.getElementById("correo").value;
    localStorage.message = document.getElementById("message").value;
    validarCorreoF(localStorage.correo)//se pasa el valor a la funcion
    alertaContactanos();
    document.getElementById("BTenviarContacto").reset();
   
}


// Debemos investigar como centrar el texto en el div el boton verde
function alertaContactanos() {
    alertify
        .alert("Envio Existoso", function () {
            //alertify.message('OK');
            alertify.success('Exito');
        });
}

function validarCorreoF(correo) {

    var expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var esValido = expReg.test(correo);
    if (esValido == true) {
        sendemail(correo)

    } else {
        alert("correo invalido");
        e.preventDefault();
    }
}



function sendemail(correo) {
   /* var contactParams = {
        from_name: "G-TPX SHOP",
        from_email: correo,
        message: ""
   };
   */  console.log("bandera1")

    emailjs.send("service_4mg55xh", "template_j3vlwmd", {
        reply_to: correo
    });

    //emailjs.send('service_4mg55xh', 'template_j3vlwmd', contactParams).then(function (res) {})
}