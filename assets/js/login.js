/*
const login_email = document.getElementById('email');
const login_sandi = document.getElementById('sandi');
const login_button = document.getElementById('login-btn');

const cek_reg_name = localStorage.getItem('register_name')
const cek_reg_email = localStorage.getItem('register_email')
const cek_reg_sandi = localStorage.getItem('register_sandi')
const cek_log_email = localStorage.getItem('login_email')
const cek_log_sandi = localStorage.getItem('login_sandi')

if (cek_reg_name, cek_reg_email, cek_reg_sandi, cek_log_email, cek_log_sandi != null) {
    window.location = 'home.html'
}

login_email.value = localStorage.getItem('register_email')
login_sandi.value = localStorage.getItem('register_sandi')

login_button.addEventListener('click', function () {

    const valid_email = localStorage.getItem('register_email')
    const valid_sandi = localStorage.getItem('register_sandi')

    if (login_email.value, login_sandi.value === '') {
        alert('Data not valid ❌')
        return false
    }

    if (login_email.value != valid_email || login_sandi.value != valid_sandi) {
        alert('Your account not found! Register Now!!')
        return false
    } else {
        localStorage.setItem('login_email', login_email.value)
        localStorage.setItem('login_sandi', login_sandi.value)
        alert('Login successfuly ✅')
        window.location = 'home.html'
    }

});

*/

// Guardar datos de registro en la base de datos de mysql

document.getElementById("register-btn").addEventListener("click", function (e) { //este evento se ejecuta cuando se hace click en el boton.
    let username = document.getElementById("email"); // obtenemos el valor del campo username
    let password = document.getElementById("password"); // obtenemos el valor del campo password
    console.log(username.value); // mostramos el valor del campo username en la consola
    console.log(password.value); // mostramos el valor del campo password en la consola

    const data =

    {
        username: username.value,  // creamos un objeto con los valores del campo username y password
        password: password.value
    };

    //METODO POST
    fetch("http://localhost:8080/api/login/", { //hace una peticion post al servidor para que lo valide
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

